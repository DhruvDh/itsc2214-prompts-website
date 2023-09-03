<script lang="ts">
	import { json } from '@sveltejs/kit';
	import {
		Button,
		CodeSnippet,
		Column,
		Content,
		Grid,
		Row,
		Tab,
		TabContent,
		Tabs,
		Tag
	} from 'carbon-components-svelte';
	import { DocumentDownload } from 'carbon-icons-svelte';

	export let data;

	const fileDownloadURI =
		'data:text/plain;charset=utf-8,' +
		encodeURIComponent(`${data.instructions}\n\n${data.goals}\n\n${data.lesson}`);
</script>

<Content>
	<Grid padding>
		<Row>
			<Column>
				<h1>{data.assignment_name}</h1>
				<Tag type="warm-gray" interactive on:click={() => window.open(data.LLM_chat_url)}>
					{data.LLM_type}
				</Tag>
			</Column>
		</Row>
		<Row>
			<Column>
				<p>
					The file primarily consists of three sections - Instructions, Goals, and the Lesson. You
					can explore the contents of each section below.
				</p>
			</Column>

			<Column>
				<Button
					expressive
					icon={DocumentDownload}
					href={fileDownloadURI}
					download={`${data.assignment_name}.md`}
				>
					Click here to Download file</Button
				>
			</Column>
		</Row>
		<Row>
			<Column>
				<Tabs>
					<Tab label="Learning Goals" />
					<Tab label="Instructions" />
					<Tab label="Lesson" />
					<svelte:fragment slot="content">
						<TabContent>
							<CodeSnippet type="multi" code={data.goals} expanded wrapText />
						</TabContent>
						<TabContent>
							<CodeSnippet type="multi" code={data.instructions} expanded wrapText />
						</TabContent>
						<TabContent>
							<CodeSnippet type="multi" code={data.lesson} expanded wrapText />
						</TabContent>
					</svelte:fragment>
				</Tabs>
			</Column>
		</Row>
	</Grid>
</Content>
