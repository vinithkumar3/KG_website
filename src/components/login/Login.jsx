import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";


import { useEffect, useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: userName, //kminchelle
        password, //0lelplR
      })
      .then((res) => {
        navigate("/navigation");
      })
      .catch((err) => {
        alert("Not a valid credentials");
      });
  };
  return (
    <div>
      <Header />
      <div class="body">
        <div class="form">
          <h1>
            <span className=" h3 text-danger font-weight-600">KG</span>
            <p className=" h3 text-secondary font-weight-600">Shuttle Court</p>
          </h1>
          <p>Login Here</p>
          <div class="io">
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email Address"
            />
            <img class="icon-user" alt="" />
            <br />
          </div>
          <div class="in">
            <br />
            <input
              type="text"
              id="number"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <img class="icon-lock" alt="" />
          </div>
          <br />
          <div class="agree">
            <input type="checkbox" class="box" />
            <label for="box"> I agree to terms of service</label>
            <br />
          </div>
          <br />{" "}
          <input
            id="registor"
            onClick={onSubmit}
            type="submit"
            value="Signin"
          />
          <br />
          <br />
          <div class="line">
            <hr />
            <div class="lo">Or Login within</div>
          </div>
          <br /> <input id="facebook" type="submit" value="Facebook" />
          <input id="twitter" type="submit" value="twitter" />
          <input id="google" type="submit" value="Google" />
          <p>Already a member?Login here </p>
          <button onClick="yesAction()">yes</button>
          <button onClick="noAction()">No</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;

// const SignIn = () => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [verificationId, setVerificationId] = useState('');

//   const handleSendOtp = async () => {
//     try {
//       // Make a POST request to your OTP generation endpoint
//       const response = await axios.post('/api/send-otp', { mobileNumber });

//       // Handle the response (e.g., store the verification ID)
//       setVerificationId(response.data.verificationId);
//       console.log('OTP sent successfully!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSignIn = async () => {
//     try {
//       // Make a POST request to your OTP verification endpoint
//       const response = await axios.post('/api/verify-otp', {
//         verificationId,
//         otp,
//       });

//       // Handle the response (e.g., store user token in local storage)
//       const userToken = response.data.token;
//       console.log('Logged in successfully!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//         <Header/>
//       <h2>Sign In</h2>
//       <div>
//         <label>Mobile Number:</label>
//         <input
//           type="text"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//           required
//         />
//       </div>
//       <button onClick={handleSendOtp}>Send OTP</button>

//       <div>
//         <label>OTP:</label>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//         />
//       </div>
//       <button onClick={handleSignIn}>Sign In</button>
//       <Gallery/>
//       <Footer/>
//     </div>
//   );
// };

// export default SignIn;
