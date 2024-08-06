<script lang="ts">
	import Link from '$lib/components/Link.svelte'
	import '$lib/app.css'
</script>

<div class="w-screen bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
	<div class="flex flex-col justify-between mx-auto max-w-screen-md min-h-screen">
		<div>
			<header>
				<p class="flex flex-row justify-center items-center py-2">
					<a href="/">hammad majid </a>
				</p>
				<ul class="flex flex-wrap gap-4 justify-center items-center p-4 border-y-2 border-zinc-500">
					<Link href="/">home</Link>
					<Link href="/about">about</Link>
					<Link href="/contact">contact</Link>
					<Link href="/projects">projects</Link>
					<Link href="/uses">uses</Link>
					<Link href="/meta">meta</Link>
				</ul>
			</header>
			<div class="px-4 py-8">
				<slot />
			</div>
		</div>
		<footer class="grid place-content-center p-4 text-sm border-t-2 border-zinc-500">
			<p>
				<Link href="/meta#license">licensed</Link> by Hammad Majid {new Date().getUTCFullYear()}
			</p>
		</footer>
	</div>
</div>
