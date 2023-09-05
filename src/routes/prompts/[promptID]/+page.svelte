<script lang="ts">
	import { json } from '@sveltejs/kit';
	import {
		Button,
		CodeSnippet,
		Column,
		Content,
		Grid,
		Link,
		Row,
		Tab,
		TabContent,
		Tabs,
		Tag
	} from 'carbon-components-svelte';
	import { DocumentDownload } from 'carbon-icons-svelte';

	import copy from 'clipboard-copy';

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
					Attach the file to a new <Link href={data.LLM_chat_url}>chat</Link> and send the following
					message -
				</p>
				<CodeSnippet
					type="inline"
					copy={async (code) => {
						try {
							await copy('I am ready, please start following your instructions');
						} catch (e) {
							console.log(e);
						}
					}}>I am ready, please start following your instructions</CodeSnippet
				>
				<hr />
				<p>
					The file primarily consists of three sections - Learning Goals, Instructions, and the
					Lesson. You can explore the contents of each section below.
				</p>
			</Column>

			<Column>
				<Button
					expressive
					icon={DocumentDownload}
					href={fileDownloadURI}
					download={`${data.assignment_name}.md`}
					size="xl"
				>
					Click here to Download the file</Button
				>
			</Column>
		</Row>
		<Row>
			<Column>
				<Tabs>
					<Tab label="Learning Goals" />
					<Tab label="Instructions for {data.LLM_type}" />
					<Tab label="Lesson" />
					<svelte:fragment slot="content">
						<TabContent>
							<CodeSnippet
								type="multi"
								code={data.goals}
								expanded
								wrapText
								copy={async (text) => await copy(text)}
							/>
						</TabContent>
						<TabContent>
							<CodeSnippet
								type="multi"
								code={data.instructions}
								expanded
								wrapText
								copy={async (text) => await copy(text)}
							/>
						</TabContent>
						<TabContent>
							<CodeSnippet
								type="multi"
								code={data.lesson}
								expanded
								wrapText
								copy={async (text) => await copy(text)}
							/>
						</TabContent>
					</svelte:fragment>
				</Tabs>
			</Column>
		</Row>
	</Grid>
</Content>
