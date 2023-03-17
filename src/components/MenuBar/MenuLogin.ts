// import { defineComponent, ref } from "vue";
// import triangle from "../../../assets/triangle.svg";
// import Email from "@/components/HandleAccount/Email/Email.vue";
// import Password from "@/components/HandleAccount/Password/Password.vue";
// import { getAuth } from "firebase/auth";
// import router from "@/router";
// import Signup from "@/components/LandingSlides/Signup/Signup.vue";
// import Login from "@/components/LandingSlides/Login/Login.vue";

// export default defineComponent({
//   name: "menu-login",
//   components: { Email, Password, Signup, Login },
//   setup() {
//     const auth = getAuth();
//     // const dropdownChild = ref(false);
//     const dropdownParent = ref(false);

//     document.addEventListener("mousedown", function (event: any) {
//       if (!event.target.closest("#modal-popup")) {
//         modalPopup.value = false;
//       }
//     });
//     const modalPopup = ref(false);
//     const handleModalPopup = () => {
//       modalPopup.value = !modalPopup.value;
//       signinPopup.value = true;

//       // dropdownParent.value = false;
//     };

//     const signinPopup = ref(false);
//     const handleSigninPopup = () => {
//       signinPopup.value = !signinPopup.value;
//       signupPopup.value = false;
//     };

//     const signupPopup = ref(false);
//     const handleSignupPopup = () => {
//       signupPopup.value = true;
//       signinPopup.value = false;
//     };

//     const handleModal = () => {
//       modalPopup.value = false;
//       signinPopup.value = false;
//       signupPopup.value = false;
//     };
//     const handleEnterSignup = () => {
//       signupPopup.value = true;
//       signinPopup.value = false;
//     };

//     const handleDropdownParent = () => {
//       dropdownParent.value = !dropdownParent.value;
//     };

//     const handleLogout = async () => {
//       await auth.signOut();
//       location.reload();
//     };

//     return {
//       handleEnterSignup,
//       handleModal,
//       modalPopup,
//       handleModalPopup,
//       signupPopup,
//       handleSignupPopup,
//       handleSigninPopup,
//       signinPopup,
//       handleLogout,
//       triangle,
//       handleDropdownParent,
//       dropdownParent,
//     };
//   },
// });
