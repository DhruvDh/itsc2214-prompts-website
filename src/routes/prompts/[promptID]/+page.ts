import { error as svelteKitError, type HttpError } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient.js';

interface PromptData {
	id: string;
	assignment_name: string;
}

export async function load({ params }): Promise<PromptData | HttpError> {
	const { data, error } = await supabase
		.from('prompts')
		.select('*')
		.eq('id', params.promptID)
		.single();

	if (error) {
		return svelteKitError(503, error.message);
	}

	return {
		...data
	};
}
