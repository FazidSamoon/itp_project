import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import { register } from "../../../api/auth/auth";
import app from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userObject = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      isStaff: true,
      photoURL: file,
      nic: e.target.nic.value,
    };

    const response = await register(userObject);
    if (!response.success) alert(response.message);
    else {
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    }
  };

  const upload = async (e) => {
    const filename = new Date().getTime() + e.target.files[0].name;
    const storage = getStorage(app);
    const storageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(downloadURL);
        });
      }
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="flex flex-col justify-center items-center  w-3/12 p-10 shadow-2xl"
      >
        <span className="text-xl font-semibold">SignUp</span>
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none rounded-sm mt-4 pl-2"
          placeholder="username"
          type="text"
          name="username"
          required
        />
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none mt-2 pl-2 "
          placeholder="email"
          type="email"
          name="email"
          required
        />
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none mt-2 pl-2 "
          placeholder="NIC number"
          type="text"
          name="nic"
          required
        />
        <input
          className="bg-[#ebe1e1] w-10/12 border-none outline-none mt-2 pl-2 "
          placeholder="password"
          type="password"
          name="password"
          required
        />
        <div className="w-10/12 mt-2">
          <span className="text-[#999] text-sm ">Profile picture: </span>
          <input
            type="file"
            name="imageUrl"
            onChange={upload}
            className="bg-[#ebe1e1] w-full text-xs outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white border border-primary w-10/12 h-7 border-none rounded-sm mt-7 font-bold"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
