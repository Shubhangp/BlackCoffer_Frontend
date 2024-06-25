import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData } from '../../Utils/loginSlice';

const ValidateForm = Yup.object().shape({
  email: Yup.string()
    .required('*Email is required!')
    .email('*Invalid Email')
    .matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, '*Invalid Email'),
  password: Yup.string()
    .required('*Password is required')
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try{
      await fetch('https://blockcoffer-backend.vercel.app/api/v1/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user_id": values.email,
          "password": values.password
        }),
      })
      .then(res=>{
        return res.json();
      })
      .then((data) => {
        if(data === "exist"){
          dispatch(loginData("exist"));
          navigate('/dashboard')
        }
        else if(data === "notexist"){
          alert("You Enter Incorrect Email or Password");
        }
      })
      .catch(e=>{
          alert("wrong details")
          console.log(e);
      })
      setLoading(false);
    }
    catch(e){
        console.log(e);

    }
  }

  return (
    <div className="pl-[5vw] flex flex-col justify-center gap-[22px]">
        <p className="text-[#000] text-4xl font-montserrat font-bold">
          Sign in to your account
        </p>
        <div className='bg-[#FFF] rounded-[20px]'>
          <Formik
            initialValues={{ email: "shubhanggpandey@gmail.com", password: "Black@1234" }}
            validationSchema={ValidateForm}
            onSubmit={(values, { setSubmitting }) => {
                handleLogin(values);
                setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-8'>
                <div className='flex flex-col'>
                  <label htmlFor="email" className='text-[#000] text-base font-lato font-normal mb-[5px]'>Email address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className='bg-[#F5F5F5] rounded-[10px] px-4 py-[6px] text-[#000] text-base font-lato font-normal focus:outline-none'
                  />
                  {errors.email && touched.email && <p className='text-[#f53737] text-base font-lato font-normal'>{errors.email}</p>}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="password" className='text-[#000] text-base font-lato font-normal mb-[5px]'>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className='bg-[#F5F5F5] rounded-[10px] px-4 py-[6px] text-[#000] text-base font-lato font-normal focus:outline-none'
                  />
                  {errors.password && touched.password && <p className='text-[#f53737] text-base font-lato font-normal'>{errors.password}</p>}
                </div>
                {/* <div className='text-[#346BD4] text-base font-lato font-normal'>Forgot password?</div> */}
                <button type="submit" disabled={loading} className='bg-[#4285F4] active:bg-[#9fc2fa] disabled:[#9fc2fa] rounded-[10px] py-2 text-[#FFF] text-base font-montserrat font-bold flex justify-center gap-2'>
                  {!loading?(<>
                    Sign In
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" stroke="white" strokeLinecap="round" strokeWidth="2">
                        <path strokeDasharray="32" strokeDashoffset="32" d="M13 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H13">
                          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"/>
                        </path>
                        <path strokeDasharray="12" strokeDashoffset="12" d="M3 12h11.5" opacity="0">
                          <set attributeName="opacity" begin="0.5s" to="1"/>
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/>
                        </path>
                        <path strokeDasharray="6" strokeDashoffset="6" d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5" opacity="0">
                          <set attributeName="opacity" begin="0.7s" to="1"/>
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"/>
                        </path>
                      </g>
                    </svg>
                  </>)
                  : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24" height="24" xlink="http://www.w3.org/1999/xlink"><g><g transform="translate(80,50)">
                  <g transform="rotate(0)">
                  <circle fillOpacity="1" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.875s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.875s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(71.21320343559643,71.21320343559643)">
                  <g transform="rotate(45)">
                  <circle fillOpacity="0.875" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.75s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.75s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(50,80)">
                  <g transform="rotate(90)">
                  <circle fillOpacity="0.75" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.625s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.625s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(28.786796564403577,71.21320343559643)">
                  <g transform="rotate(135)">
                  <circle fillOpacity="0.625" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.5s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.5s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(20,50.00000000000001)">
                  <g transform="rotate(180)">
                  <circle fillOpacity="0.5" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.375s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.375s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(28.78679656440357,28.786796564403577)">
                  <g transform="rotate(225)">
                  <circle fillOpacity="0.375" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.25s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.25s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(49.99999999999999,20)">
                  <g transform="rotate(270)">
                  <circle fillOpacity="0.25" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="-0.125s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="-0.125s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g><g transform="translate(71.21320343559643,28.78679656440357)">
                  <g transform="rotate(315)">
                  <circle fillOpacity="0.125" fill="#ffffff" r="6" cy="0" cx="0">
                    <animateTransform repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.5 1.5;1 1" begin="0s" type="scale" attributeName="transform"></animateTransform>
                    <animate begin="0s" values="1;0" repeatCount="indefinite" dur="1s" keyTimes="0;1" attributeName="fillOpacity"></animate>
                  </circle>
                  </g>
                  </g>
                  <g></g>
                  </g>
                  </svg>)}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
  )
}

export default Login;