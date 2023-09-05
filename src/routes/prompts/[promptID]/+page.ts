import { error as svelteKitError, type HttpError } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient.js';

interface PromptData {
	id: string;
	assignment_name: string;
	LLM_type: string;
	LLM_chat_url: string;
	instructions_url: string;
	lesson_url: string;
	goals_url: string;
	lesson: string;
	goals: string;
	instructions: string;
}

export async function load({ fetch, params }): Promise<PromptData | HttpError> {
	const { data, error } = await supabase
		.from('prompts')
		.select('*')
		.eq('id', params.promptID)
		.single();

	if (error) {
		return svelteKitError(503, error.message);
	}

	const lesson_response = fetch(data.lesson_url, {});
	const goals_response = fetch(data.goals_url, {});
	const instructions_response = fetch(data.instructions_url, {});

	const responses = await Promise.all([lesson_response, goals_response, instructions_response]);
	const [lesson, goals, instructions] = await Promise.all(
		responses.map((response) => response.text())
	);

	return {
		...data,
		lesson: `<lesson>\n${lesson}\n</lesson>`,
		goals: `<goals>\n${goals}\n</goals>`,
		instructions: `<instructions>\n${instructions}\n</instructions>`
	};
}
