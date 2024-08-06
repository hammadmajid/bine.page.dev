<script lang="ts">
	export let href: string
	export let fontWeight: string = 'font-medium'
</script>

<a
	{href}
	class={'underline font-inherit underline-offset-4 decoration-dashed hover:text-blue-500 transition-all duration-350' +
		' ' +
		fontWeight}><slot /></a
>
