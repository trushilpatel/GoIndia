import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				gBlue: "#4285F4",
				gRed: "#DB4437",
				gYellow: "#F4B400",
				gGreen: "#0F9D58",
			},
		},
	},
})
