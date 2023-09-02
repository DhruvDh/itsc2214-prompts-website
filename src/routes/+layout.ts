import { supabase } from '$lib/supabaseClient';
import type { PostgrestError } from '@supabase/supabase-js';

interface PromptsRow {
	assignment_name: string;
	id: string;
}

interface PromptsData {
	prompts: PromptsRow[];
	error: PostgrestError | null;
}

export async function load(): Promise<PromptsData> {
	const { data, error } = await supabase.from('prompts').select('id,assignment_name');

	if (error) {
		return { prompts: [], error: error };
	}

	if (data.length === 0) {
		return { prompts: [], error: error };
	} else {
		return { prompts: data, error: error };
	}
}

export const prerender = true;
