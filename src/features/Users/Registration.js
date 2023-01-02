import "./Registration.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateFirstName } from "./registrationSlice";
import { actions } from "../../Slices/RegistrationSlice";
import { inputUserData } from "../../Slices/RegistrationSlice";

function Registration() {
  const dispatch = useDispatch();

  const user_id = useSelector((state) => {
    return state.registration.user_id;
  });

  const FirstName = useSelector((state) => {
    return state.registration.firstName;
  });

  const LastName = useSelector((state) => {
    return state.registration.lastName;
  });

  const username = useSelector((state) => {
    return state.registration.userName;
  });

  const password = useSelector((state) => {
    return state.registration.password;
  });

  const dob = useSelector((state) => {
    return state.registration.DOB;
  });

  const nationality = useSelector((state) => {
    return state.registration.nationality;
  });
  const email = useSelector((state) => {
    return state.registration.email;
  });
  const phoneno = useSelector((state) => {
    return state.registration.phoneno;
  });
  const gender = useSelector((state) => {
    return state.registration.gender;
  });

  function inputHandler(event) {
    event.preventDefault();
    const userObj = {
      FirstName,
      LastName,
      username,
      password,
      dob,
      user_id,
      gender,
      nationality,
      email,
    };
    dispatch(inputUserData(userObj));
    dispatch(actions.resetForm());
  }
  return (
    <>
      <form onSubmit={inputHandler}>
        <div className="container">
          <center>
            {" "}
            <h1> User Registration </h1>{" "}
          </center>

          <label> User id </label>
          <input
            class="form-control"
            type="text"
            name="User_id"
            value={user_id}
            placeholder="user_id"
            size="20"
            required
            onChange={(event) =>
              dispatch(actions.updateuserid(event.target.value))
            }
          />
          <br></br>

          <label> Firstname </label>
          <input
            class="form-control"
            type="text"
            name="Firstname"
            value={FirstName}
            placeholder="FirstName"
            size="20"
            required
            onChange={(event) =>
              dispatch(actions.updateFirstName(event.target.value))
            }
          />
          <br></br>
          <label> LastName: </label>
          <input
            class="form-control"
            type="text"
            name="LastName"
            value={LastName}
            placeholder="LastName"
            size="20"
            required
            onChange={(event) =>
              dispatch(actions.updateLastName(event.target.value))
            }
            style={{ padding: "10" }}
          />
          <br></br>
          <label> username: </label>
          <input
            class="form-control"
            type="text"
            name="username"
            value={username}
            placeholder="UserName"
            size="20"
            required
            onChange={(e) => dispatch(actions.updateUserName(e.target.value))}
          />
          <br></br>
          <label> password: </label>
          <input
            class="form-control"
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            size="20"
            required
            onChange={(e) => dispatch(actions.updatePassword(e.target.value))}
          />
          <br></br>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            required
            onChange={(e) => dispatch(actions.updateEmail(e.target.value))}
          />
          <br></br>
          <div className="container">
            <label>Gender :</label>
            <br></br>
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => dispatch(actions.updateGender("Male"))}
            />{" "}
            Male
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => dispatch(actions.updateGender("Female"))}
            />{" "}
            Female
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) =>
                dispatch(actions.updateGender("Do not disclose"))
              }
            />{" "}
            Do_not_disclose
          </div>
          <br></br>
          <label htmlFor="birthday">Birthday:</label>
          <input
            class="form-control"
            type="date"
            id="birthday"
            name="birthday"
            value={dob}
            onChange={(e) => dispatch(actions.updateBirthday(e.target.value))}
          />

          <br></br>

          {/*<label>Phone :</label>
          <input
            type="text"
            name="phone_no"
            value={phoneno}
            placeholder="phon no."
            size="12"
            onChange={(e) => dispatch(actions.updatePhoneno(e.target.value))}
            />*/}
          <label> Nationality: </label>
          <select
            class="form-select"
            type="text"
            name="Nationality"
            required
            onChange={(e) =>
              dispatch(actions.updateNationality(e.target.value))
            }
          >
            <option> </option>
            <option> Indian </option>
            <option> Others </option>
          </select>

          {/* <label> Nationality: </label>
          <input
            className="input"
            type="text"
            name="Nationality"
            value={nationality}
            placeholder="Nationality"
            size="30"
            required
            onChange={(e) =>
              dispatch(actions.updateNationality(e.target.value))
            }
          /> */}

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Registration;