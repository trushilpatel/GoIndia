<template>
	<v-main class="mt-0 pt-0">
		<v-card class="pb-5 mx-3 mb-5">
			<v-card-title class="border-bottom white--text gGreen title">
				Get Tickets... The Rare Ones Too...
			</v-card-title>
			<v-card-text>
				<div class="my-5 py-5">
					<v-row>
						<span
							class="px-10 ml-auto mr-auto px-5 subtitle-1 gRed--text mb-5 text-center"
							>Giving 100 rare tickets everyday!!! Claim yours now...</span
						>
					</v-row>
					<v-row>
						<v-btn
							large
							rounded
							color="gBlue"
							class="px-10 ml-auto mr-auto"
							elevation="7"
							@click="shareLinkDialog = true"
							><span class="white--text px-5">Get Ticket</span></v-btn
						>
					</v-row>
					<v-row>
						<v-btn
							large
							rounded
							color="gBlue"
							class="px-10 mt-5 ml-auto mr-auto"
							elevation="7"
							@click="requestTicketDialog = true"
						>
							<span class="white--text">Request Ticket</span></v-btn
						>
					</v-row>
					<v-row class="mt-5 pt-5">
						<div class="ml-auto mr-auto">
							<component
								:is="'script'"
								src="http://www.newdisplayformats.com/8e94104f5af11aab666782fac71d9a25/invoke.js"
								async
							></component>
						</div>
					</v-row>
				</div>
				<v-expansion-panels class="mb-3">
					<v-expansion-panel>
						<v-expansion-panel-header class="subtitle-1">
							How to earn tickets?
						</v-expansion-panel-header>
						<v-expansion-panel-content class="text-justify">
							<div class="ml-3">
								<p>
									1. Share your extra ticket link by tapping
									<span class="font-weight-bold">GET TICKET</span> button and in
									return get any random ticket.
								</p>
								<p>
									2. Request rare tickets by tapping
									<span class="font-weight-bold">REQUEST TICKET</span> button.
								</p>
								<p>
									* Please don't share fake and claimed links in that case you
									will be added to blocklist and will not be able to receive the
									RARE tickets.
								</p>
								<p>
									* On this website you can have trusted exchanges.
								</p>
								<p>
									* We simply exchange links in between users.
								</p>
								<p>
									* If you don't get your desired ticket by following the 1st
									step then we request you to follow step 2 and wait for
									sometime.
								</p>
								<p>
									* We will send the tickets on or before 24th Nov on the basis
									of first come first serve.
								</p>
								<p class="font-weight-bold">
									Check the website regularly to get updates.
								</p>
							</div>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<v-expansion-panel>
						<v-expansion-panel-header class="subtitle-1">
							Go India Game Tricks
						</v-expansion-panel-header>
						<v-expansion-panel-content class="pl-3 text-justify">
							<div>
								<header class="subtitle-2">Rewards</header>
								<div class="pl-3 pt-3">
									<p>
										1. Assured scratch card of Rs 101 to 501 on completing all
										the cities.
									</p>
									<p>
										2. City events in which you can get the tickets, vouchers
										and scratch cards.
									</p>
								</div>
							</div>
							<div>
								<header class="subtitle-2">
									How to play and earn rewards?
								</header>
								<div class="pl-3 pt-3">
									<p>1. There are 30 cities of india.</p>
									<p>
										2. You need to visit the city by combination of both a
										ticket and KM.
									</p>
									<p>
										3. At start you get 3000 KM and a ticket then you need to
										collect other city tickets and KM.
									</p>
								</div>
							</div>
							<div>
								<header class="subtitle-2">How to To Collect tickets?</header>
								<div class="pl-3 pt-3">
									<p>
										1. Pay a friend friend on google pay in app.(min 1rp
										transaction,ticket per friend)
									</p>
									<p>2. Do Mobile Recharges.(only on gpay,no min spend)</p>
									<p>
										3. Purchase play store recharge codes on google play or pay
										via UPI on google play.
									</p>
									<p>4. Pay at local shops and select online merchants.</p>
									<p>5. Share a photo or Go india map.</p>
									<p>6. Request ticket from friend.</p>
								</div>
							</div>
							<div>
								<header class="subtitle-2">
									How to To Collect kilometers?
								</header>
								<div class="pl-3 pt-3">
									<p>
										1. Morning gift.
									</p>
									<p>
										2. Do a bank transfer on Google pay.
									</p>

									<p>3. Pay to another user's UPI id.</p>
									<p>4. Gift ticket to friend.</p>
								</div>
							</div>
							<div>
								<header class="subtitle-2">For more information</header>
								<div class="pl-3 pt-3">
									<p>
										visit the google official help article or read the terms and
										conditions in Google Pay app or visit the link below.
									</p>
									<a
										href="https://support.google.com/pay/india/answer/10125383"
										target="_blank"
										>https://support.google.com/pay/india/answer/10125383</a
									>
								</div>
							</div>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
				<v-dialog v-model="processingDialog" persistent width="400">
					<v-card color="primary overline " dark>
						<v-card-text class="pt-3">
							Please stand by
							<v-progress-linear
								indeterminate
								color="white"
								class="my-3 light--text"
							></v-progress-linear>
						</v-card-text>
					</v-card>
				</v-dialog>
				<v-dialog v-model="snackbar.show" persistent width="400" class="color">
					<v-card :color="snackbar.color">
						<v-card-text class="pt-3 white--text">
							<span>
								{{ snackbar.text }}
							</span>
						</v-card-text>
					</v-card>
				</v-dialog>
				<v-dialog v-model="shareLinkDialog" persistent width="400">
					<v-card>
						<v-card-title class="subtitle green mb-5 white--text">
							First Share your extra ticket here...
						</v-card-title>
						<v-card-text>
							<v-text-field
								v-model.trim="sharedLink"
								label="Enter Link"
								placeholder="https://gpay.app.goo.gl/******"
								outlined
								:error="$v.sharedLink.$dirty && $v.sharedLink.$invalid"
								:dense="true"
								hide-details="auto"
								@click="$v.sharedLink.$touch()"
							></v-text-field>
							<p class="gRed--text text-justify mt-3 mb-0 pb-1 pl-3">
								* Enter the link part only.
							</p>
							<p class="gRed--text text-justify mb-0 pl-3">
								* Don't paste entire message.
							</p>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color="green darken-1"
								text
								:disabled="$v.sharedLink.$invalid"
								@click="saveSharedTicket()"
							>
								Next
							</v-btn>
							<v-btn
								color="green darken-1"
								text
								@click=";(shareLinkDialog = false), $v.$reset()"
							>
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="requestTicketDialog" persistent width="400">
					<v-card>
						<v-card-title class="subtitle green mb-5 white--text">
							Request Tickets...
						</v-card-title>
						<v-card-text v-if="!showEmailDialog">
							<v-checkbox
								v-for="ticket in rareTickets"
								:key="ticket"
								v-model="requestedTickets"
								:label="ticket"
								:value="ticket"
							></v-checkbox>
						</v-card-text>
						<v-card-text v-if="showEmailDialog">
							<v-text-field
								v-model.trim="userEmail"
								label="Enter Your email"
								outlined
								:error="$v.userEmail.$dirty && $v.userEmail.$invalid"
								type="email"
								:dense="true"
								hide-details="auto"
								@click="$v.userEmail.$touch()"
							></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								v-if="!showEmailDialog"
								color="green darken-1"
								text
								:disabled="!requestedTickets.length"
								@click="showEmailDialog = true"
							>
								Next </v-btn
							><v-btn
								v-if="showEmailDialog"
								color="green darken-1"
								text
								:disabled="$v.userEmail.$invalid"
								@click="
									saveRequestedTickets()
									$v.$reset()
								"
							>
								Request
							</v-btn>
							<v-btn
								color="green darken-1"
								text
								@click="
									;(requestTicketDialog = false), (showEmailDialog = false)
									requestedTickets.splice(0, requestedTickets.length)
								"
							>
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="message.show" persistent width="400">
					<v-card>
						<v-card-title class="primary white--text">
							Hurray, Here is your Ticket...
						</v-card-title>
						<v-card-text class="pt-5 mt-3 glow">
							<v-text-field
								placeholder="Placeholder"
								outlined
								:value="message.text"
								@click="copyLink()"
								ref="textToCopy"
							>
								<v-icon slot="append" @click="copyLink()"
									>mdi-checkbox-multiple-blank-outline</v-icon
								>
							</v-text-field>
							<p class="gRed--text text-justify pb-2 mb-0">
								*If you are getting claimed tickets then we request you to come
								back tomorrow.
							</p>
							<p class="gRed--text text-justify">
								*We update our database daily.
							</p>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" large @click="message.show = false">
								Close
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-snackbar v-model="copied" :timeout="2000">
					Link Copied Successfully...
					<template v-slot:action="{ attrs }">
						<v-btn color="blue" text v-bind="attrs" @click="copied = false">
							Close
						</v-btn>
					</template>
				</v-snackbar>
				<v-snackbar v-model="snackbar.show" :color="snackbar.color">
					{{ snackbar.text }}
					<template v-slot:action="{ attrs }">
						<v-btn
							color="white"
							text
							v-bind="attrs"
							@click="snackbar.show = false"
						>
							Close
						</v-btn>
					</template>
				</v-snackbar>
			</v-card-text>
		</v-card>
	</v-main>
</template>

<script>
import { email, required } from "vuelidate/lib/validators"
export default {
	name: "LinksSection",
	data: () => ({
		processingDialog: false,
		showLinkDialog: false,
		shareLinkDialog: false,
		requestTicketDialog: false,
		showEmailDialog: false,
		sharedLink: "",
		userEmail: "",
		snackbar: {
			show: false,
			text: "",
			color: "",
		},
		rareTickets: [
			"Bastar",
			"Gaya",
			"Goa",
			"Kochi",
			"Gangtok",
			"Nainital",
			"Puri",
		],
		requestedTickets: [],
		message: {
			show: false,
			text: "",
		},
		copied: false,
	}),
	validations: {
		sharedLink: {
			lengthEqualsThirty: (value) => value.length === 30,
			isGoogleLink: (value) => value.startsWith("https://gpay.app.goo.gl/"),
		},
		userEmail: {
			required: required,
			email: email,
		},
	},
	methods: {
		getEmail() {},
		async saveSharedTicket() {
			this.shareLinkDialog = false
			this.processingDialog = true
			setTimeout(() => (this.processingDialog = false), 2000)

			const response = await (
				await fetch(process.env.VUE_APP_BASEURL + "api/ticket", {
					method: "POST",
					body: JSON.stringify({
						ticket: this.sharedLink,
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				})
			).text()

			if (response === "ERROR") {
				this.snackbar.show = true
				this.snackbar.text = "Link already exist!"
				this.snackbar.color = "gRed"
				console.log("ERROR")
			} else {
				const getLink = (
					await (await fetch(process.env.VUE_APP_BASEURL + "api/ticket")).json()
				).ticket
				this.message = {
					show: true,
					text: getLink,
					color: "primary",
				}
			}
			setTimeout(() => (this.snackbar.show = false), 1500)
		},
		copyLink() {
			let textToCopy = this.$refs.textToCopy.$el.querySelector("input")
			textToCopy.select()
			document.execCommand("copy")
			this.copied = true
		},
		async saveRequestedTickets() {
			this.requestTicketDialog = false
			this.processingDialog = true
			const response = await (
				await fetch(process.env.VUE_APP_BASEURL + "api/user", {
					method: "POST",
					body: JSON.stringify({
						requestedTickets: this.requestedTickets,
						email: this.userEmail,
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				})
			).text()

			this.userEmail = ""
			this.requestedTickets = []
			this.showEmailDialog = false
			setTimeout(() => (this.processingDialog = false), 2000)

			if (response === "UPDATED") {
				this.snackbar.show = true
				this.snackbar.text = "Your Request is Updated"
				this.snackbar.color = "success"
				console.log("ERROR")
			} else {
				this.snackbar.show = true
				this.snackbar.text = "Your Request is Created"
				this.snackbar.color = "success"
			}
			setTimeout(() => (this.snackbar.show = false), 1500)
		},
	},
}
</script>
