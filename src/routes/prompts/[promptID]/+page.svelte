<script lang="ts">
	import { Column, Content, Grid, Row } from 'carbon-components-svelte';

	export let data;
</script>

<Content>
	<Grid>
		<Row>
			<Column>
				<h1>{data.assignment_name}</h1>
			</Column>
		</Row>
	</Grid>
</Content>
