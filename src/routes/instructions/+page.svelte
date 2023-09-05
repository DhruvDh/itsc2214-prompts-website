<script lang="ts">
	import {
		Button,
		CodeSnippet,
		Column,
		Content,
		Grid,
		ListItem,
		OrderedList,
		Row,
		UnorderedList
	} from 'carbon-components-svelte';
	import { ArrowRight } from 'carbon-icons-svelte';

	import copy from 'clipboard-copy';

	export let data;
</script>

<Content>
	<Grid>
		<Row>
			<Column>
				<h1 id="instructions">Instructions for Students</h1>
			</Column>
		</Row>
		<Row>
			<Column>
				<Content>
					<OrderedList>
						<ListItem>
							<strong>Download the Document</strong>: Download the document listed for your
							assignment.
						</ListItem>
						<ListItem>
							<strong>Visit Claude.ai</strong>: Navigate to
							<a href="https://claude.ai/">Claude.ai</a>.
						</ListItem>
						<ListItem>
							<strong>Account Setup</strong>:
							<UnorderedList>
								<ListItem>Register and/or log in using your NinerNet account.</ListItem>
							</UnorderedList>
						</ListItem>
						<ListItem>
							<strong>Initiate Chat</strong>:
							<UnorderedList>
								<ListItem
									>Click on <CodeSnippet type="inline" copy={async (text) => await copy(text)}
										>Start new Chat.</CodeSnippet
									></ListItem
								>
							</UnorderedList>
						</ListItem>
						<ListItem>
							<strong>File Attachment</strong>:
							<UnorderedList>
								<ListItem
									>Attach the <CodeSnippet type="inline" copy={async (text) => await copy(text)}
										>.md</CodeSnippet
									> file you downloaded in Step 1.</ListItem
								>
							</UnorderedList>
						</ListItem>
						<ListItem>
							<strong>Starting the Conversation</strong>:
							<UnorderedList>
								<ListItem>
									Type <CodeSnippet
										type="inline"
										copy={async (code) => {
											try {
												await copy('I am ready, please start following your instructions');
											} catch (e) {
												console.log(e);
											}
										}}>I am ready, please start following your instructions</CodeSnippet
									> and press enter.
								</ListItem>
							</UnorderedList>
						</ListItem>
					</OrderedList>
				</Content>
			</Column>
		</Row>
		<Row>
			<Column>
				<h2 id="post-chat-actions">Post-Chat Actions</h2>
				<Content>
					<OrderedList>
						<ListItem>
							<strong>Select and Copy</strong>:
							<UnorderedList>
								<ListItem>
									Once you are done with your conversation, select your entire conversation by
									dragging from the bottom to the top.
								</ListItem>
							</UnorderedList>
						</ListItem>
						<ListItem>
							<strong>Submit Assignment</strong>:
							<UnorderedList>
								<ListItem>
									Paste the copied conversation inside your assignment submission and click submit.
								</ListItem>
							</UnorderedList>
						</ListItem>
					</OrderedList>
				</Content>
			</Column>
		</Row>
		<Row>
			<Column>
				<h2 id="additional-notes">Additional Notes</h2>
				<Content>
					<UnorderedList>
						<ListItem>
							You may occasionally need to use messages like <CodeSnippet
								type="inline"
								copy={async (text) => await copy(text)}>please continue</CodeSnippet
							>, or <CodeSnippet type="inline" copy={async (text) => await copy(text)}
								>let us go to the next question</CodeSnippet
							> etc.
						</ListItem>
						<ListItem>
							Keep your answers simple and not especially formal. <br /> For example:
							<CodeSnippet type="inline"
								>it compiles the Java code we write to bytecode.</CodeSnippet
							> and
							<CodeSnippet type="inline" copy={async (text) => await copy(text)}>
								we need to check types to ensure the statements we use are valid.
							</CodeSnippet>
						</ListItem>
						<ListItem
							>It is crucial to read the responses from Claude, as this provides valuable feedback.</ListItem
						>
						<ListItem>
							Claude may skip question numbers, ask different questions, etc. This is expected and
							should not meaningfully affect your experience.
						</ListItem>
						<ListItem>
							We will have in-class quizzes based on the prep work assignments the next time you
							come into class.
						</ListItem>
					</UnorderedList>
				</Content>
			</Column>
		</Row>
		<Row>
			<Column>
				<h2 id="rubric">Example Rubric</h2>
				<Content>
					<UnorderedList>
						<ListItem>9 questions attempted - 5 points</ListItem>
						<ListItem>7-8 questions attempted - 4 points</ListItem>
						<ListItem>5-6 questions attempted - 3 points</ListItem>
						<ListItem>Fewer than 5 questions - 0 points</ListItem>
					</UnorderedList>
				</Content>
			</Column>
		</Row>
		<Row>
			<Column>
				<h3 id="penalties">Penalties</h3>
				<Content>
					<UnorderedList>
						<ListItem>
							TAs may penalize you for answering &quot;I don&#39;t know&quot; or similar for a
							majority of questions.
						</ListItem>
						<ListItem>
							TAs can also penalize you for copying answers from the reading assignment or elsewhere
							on the internet without adding your own inputs. All answers should be your own
							thoughts and opinions.
						</ListItem>
					</UnorderedList>
				</Content>
			</Column>
		</Row>
		<Row>
			<Column>
				<Content>
					<Button href={`prompts/${data.assignmentNames[0].id}`} icon={ArrowRight}
						>Go to First Assignment</Button
					>
				</Content>
			</Column>
		</Row>
	</Grid>
</Content>
