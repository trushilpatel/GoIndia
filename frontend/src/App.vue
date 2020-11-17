<template>
	<v-app>
		<v-app-bar :dense="true" app>
			<v-toolbar-title large>
				<span class="gGreen--text pl-5 title">
					OFFERIEZ
				</span>
			</v-toolbar-title>
		</v-app-bar>
		<v-main app class="mt-5">
			<LinksSection />
		</v-main>
		<component
			:is="'script'"
			src="http://pl15936290.profitablecpmnetwork.com/3b93dc0799d6b8567493835bb0de1595/invoke.js"
			data-cfasync="false"
			async
		>
		</component>
		<div id="container-3b93dc0799d6b8567493835bb0de1595"></div>
		<v-footer class="center py-3 mt-3">
			<template>
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-header class="subtitle-1 gGreen--text">
							Disclaimer
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							<div class="text-justify pl-3">
								<p>
									* We are not partner or tied with google or gpay or any offer
									or event is going on or has been held.
									<span class="font-weight-bold"
										>This is just platform for exchanging.</span
									>
								</p>
								<p>
									* By reading and/or using any information given on this site
									or page (in the past, present and future), you agree that you
									are on your own and bear full responsibility of the risk or
									any harm that may occur to you or others (because of you) in
									any way whatsoever.
								</p>
								<p>
									* You also agree that we (offeriez.com,offeriez) will not be
									liable for any damages that you or others (because of you) may
									incur.
								</p>
							</div>
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
