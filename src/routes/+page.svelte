<script>
	import { Content, Grid, Row, Column, Button, ButtonSet, Tile } from 'carbon-components-svelte';
	import { ArrowRight } from 'carbon-icons-svelte';

	export let data;
</script>

<Content>
	<Grid padding>
		<Tile>
			<Column aspectRatio="2x1">
				<h1 style="font-size: 7.8rem">ITSC 2214</h1>
				<h1 style="font-size: 7.8rem">Data Structures and Algorithms</h1>
			</Column>
		</Tile>

		<Column>
			<ButtonSet>
				<Button
					href={`prompts/${data.assignmentNames[0].id}`}
					size="xl"
					expressive
					icon={ArrowRight}
				>
					Go to First Assignment
				</Button>
				<Button href="/" size="xl" expressive icon={ArrowRight}>Practice</Button>
				<Button href="/" size="xl" expressive icon={ArrowRight}>Ask Questions</Button>
			</ButtonSet>
		</Column>
	</Grid>
</Content>
