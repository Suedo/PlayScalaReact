import React from "react";
import { useForm } from "react-hook-form";

import "./CreateEmployee.css";

export const CreateEmployeeForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="formClass">
      <p> Create an employee </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-label-group">
          <input
            type="text"
            placeholder="First name"
            name="First name"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-label-group">
          <input
            type="text"
            placeholder="Last name"
            name="Last name"
            ref={register({ required: true, maxLength: 100 })}
          />
        </div>
        <div className="form-label-group">
          <input
            type="text"
            placeholder="Email"
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/i })}
          />
        </div>
        <div className="form-label-group">
          <input
            type="tel"
            placeholder="Mobile number"
            name="Mobile number"
            ref={register({ required: true, minLength: 6, maxLength: 12 })}
          />
        </div>
        <div className="form-label-group form-selector">
          <label>Gender</label>
          <span>
            <select name="Gender" ref={register({ required: true })}>
              <option value="Male">Male</option>
              <option value=" Female"> Female</option>
              <option value=" Other"> Other</option>
            </select>
          </span>
        </div>
        <div className="form-label-group">
          <input
            type="datetime"
            placeholder="DOB"
            name="DOB"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-label-group form-selector">
          <label>Designation</label>
          <span>
            <select name="Designation" ref={register({ required: true })}>
              <option value="Trainee">Trainee</option>
              <option value=" Developer"> Developer</option>
              <option value=" Tester"> Tester</option>
              <option value=" Senior Developer"> Senior Developer</option>
              <option value=" Manager"> Manager</option>
              <option value=" Director"> Director</option>
            </select>
          </span>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            placeholder="Username"
            name="Username"
            ref={register({ required: true, maxLength: 5 })}
          />
        </div>
        <div id="submit-button">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
