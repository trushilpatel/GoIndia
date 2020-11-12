<template>
	<v-app>
		<v-app-bar :dense="true" app>
			<v-toolbar-title class="text-center ml-auto mr-auto">
				<span class="gRed--text">
					Get Tickets... The Rare Ones Too...
				</span>
			</v-toolbar-title>
		</v-app-bar>
		<v-main app class="mt-5">
			<LinksSection />
		</v-main>
		<v-footer app class="center">
			<template>
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-header>
							Disclaimer
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							We are not partner or tied with google or gpay or any offer or
							event is going on or has been held "this is just platform for
							exchanging"
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</template>
		</v-footer>
	</v-app>
</template>

<script>
import LinksSection from "./components/LinksSection"

export default {
	name: "App",

	components: {
		LinksSection,
	},

	data: () => ({
		//
	}),
}
</script>
