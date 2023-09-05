import { supabase } from '$lib/supabaseClient';
import type { PostgrestError } from '@supabase/supabase-js';

interface AssignmentName {
	assignment_name: string;
	id: string;
}

interface AssignmentData {
	assignmentNames: AssignmentName[];
	error: PostgrestError | null;
}

export async function load(): Promise<AssignmentData> {
	const { data, error } = await supabase.from('prompts').select('id,assignment_name');

	if (error) {
		return { assignmentNames: [], error: error };
	}

	if (data.length === 0) {
		return { assignmentNames: [], error: error };
	} else {
		return { assignmentNames: data, error: error };
	}
}

export const prerender = true;
