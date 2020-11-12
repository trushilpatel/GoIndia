<template>
  <div>
    <v-row>
      <v-btn
        large
        rounded
        color="gBlue"
        class="px-15 ml-auto"
        elevation="7"
        @click="shareLinkDialog = true"
        ><span class="white--text px-5">Get Ticket</span></v-btn
      >
      <v-btn
        large
        rounded
        color="gBlue"
        class="px-15 mr-auto"
        elevation="7"
        @click="requestTicketDialog = true"
        ><span class="white--text">+ Request Ticket</span></v-btn
      >
    </v-row>
    <v-dialog v-model="processingDialog" hide-overlay persistent width="400">
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
    <v-dialog v-model="shareLinkDialog" hide-overlay persistent width="400">
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
            @click="(shareLinkDialog = false), $v.$reset();"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="requestTicketDialog" hide-overlay persistent width="400">
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
            @click="saveRequestedTickets()"
          >
            Request
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="
              (requestTicketDialog = false), (showEmailDialog = false);
              requestedTickets.splice(0, requestedTickets.length);
            "
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="message.show" hide-overlay persistent width="400">
      <v-card>
        <v-card-title class="primary white--text">
          Hurray Here is your Ticket...
        </v-card-title>
        <v-card-text class="pt-5 mt-3 glow">
          <v-text-field
            placeholder="Placeholder"
            outlined
            :value="message.text"
            append-icon="mdi-checkbox-multiple-blank-outline"
            @click="copyLink()"
            ref="textToCopy"
          >
          </v-text-field>
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
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="2000">
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import email from "vuelidate/lib/validators/email";
import axios from "axios";

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
      text: "https://gpay.app.goo.gl/jquEog",
    },
    copied: false,
  }),
  validations: {
    sharedLink: {
      lengthEqualsThirty: (value) => value.length === 30,
      isGoogleLink: (value) => value.startsWith("https://gpay.app.goo.gl/"),
    },
    userEmail: {
      email: email,
    },
  },
  methods: {
    getEmail() {},
    async saveSharedTicket() {
      this.shareLinkDialog = false;
      this.processingDialog = true;
      setTimeout(() => (this.processingDialog = false), 2000);
      const response = await axios.post(
        process.env.VUE_APP_BASEURL + "api/ticket",
        {
          ticket: this.sharedLink,
        }
      );

      if (response.data === "ERROR") {
        this.snackbar = {
          show: true,
          text: "Please Enter valide link!!!",
          color: "gRed",
        };
        console.log("ERROR");
      } else {
        const getLink = (
          await axios.get(process.env.VUE_APP_BASEURL + "api/ticket")
        ).data.ticket;
        this.message = {
          show: true,
          text: getLink,
          color: "primary",
        };
      }
    },
    copyLink() {
      let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
      console.log("COPIED");
      this.copied = true;
    },
    async saveRequestedTickets() {
      this.requestTicketDialog = false;
      this.processingDialog = true;
      const response = await axios.post(
        process.env.VUE_APP_BASEURL + "api/user",
        {
          requestedTickets: this.requestedTickets,
          email: this.userEmail,
        }
      );

      this.userEmail = "";
      this.requestedTickets = [];
      this.showEmailDialog = false;
      setTimeout(() => (this.processingDialog = false), 2000);

      if (response.data === "UPDATED") {
        this.snackbar = {
          show: true,
          text: "Your Request is Updated",
          color: "success",
        };
        console.log("ERROR");
      } else {
        this.snackbar = {
          show: true,
          text: "Your Request is Created",
          color: "success",
        };
      }
    },
  },
};
</script>

<style>
.glow {
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #75ec75,
      0 0 40px #55cf60, 0 0 50px #26c917, 0 0 60px #259104, 0 0 70px #1eaf0b;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ad6beb, 0 0 40px #33c2fa,
      0 0 50px #50c2f0, 0 0 60px #3d5adb, 0 0 70px #1d20c0, 0 0 80px #1a40a7;
  }
}
</style>
