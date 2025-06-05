  import { useNavigate } from 'react-router-dom';
  import React, { useState, useEffect } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';

  const SignUpPage = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });

    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordRequirements, setPasswordRequirements] = useState({
      minLength: false,
      hasUppercase: false,
      hasSpecial: false
    });

    const [isSignup, setIsSignup] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 480);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });

      if (name === 'password') {
        setPasswordRequirements({
          minLength: value.length >= 6,
          hasUppercase: /[A-Z]/.test(value),
          hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value)
        });
      }
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
  e.preventDefault();

  const url = isSignup 
    ? "http://localhost:8000/api/register" 
    : "http://localhost:8000/api/login";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Success:", data);
      localStorage.setItem("token", data.token); // ← opslaan token
      navigate("/home");
    } else {
      console.error("Error response:", data);
      alert(data.message || "Er ging iets mis");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Server niet bereikbaar");
  }
};


    // const renderPasswordDisplay = () => {
    //   if (formData.password.length === 0 && !passwordFocused) {
    //     return '******';
    //   } else if (formData.password.length > 0) {
    //     return '*'.repeat(formData.password.length);
    //   }
    //   return '';
    // };

    const inputStyle = {
      borderRadius: '6px',
      borderColor: '#FEC300',
      borderWidth: '1px',
      color: 'black',
      width: isMobile ? '85%' : '100%',
      margin: isMobile ? '0 auto' : '0'
    };

    // const tallInputStyle = {
    //   ...inputStyle,
    //   height: '50px',
    //   padding: '10px 12px',
    //   fontSize: '16px'
    // };

    // const passwordInputStyle = {
    //   ...inputStyle,
    //   fontWeight: 'bold'
    // };

    const labelStyle = {
      color: '#000000',
      paddingLeft: isMobile ? '7.5%' : '0'
    };

    const requirementContainerStyle = {
      paddingLeft: isMobile ? '7.5%' : '0'
    };

    const commonButtonStyle = {
      width: isMobile ? '85%' : '100%',
      margin: '0 auto',
      display: 'block'
    };

    // const socialButtonStyle = {
    //   ...commonButtonStyle,
    //   backgroundColor: 'white',
    //   color: 'black',
    //   border: '1px solid #e0e0e0',
    //   borderRadius: '6px',
    //   padding: '10px',
    //   marginBottom: '10px',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // };

    return (
      <div className="d-flex justify-content-center align-items-center" style={{
        minHeight: '100vh',
        backgroundColor: '#fff8dc',
        width: '100%'
      }}>
        <div className="container-fluid" style={{ padding: '0 15px' }}>
          <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <div className="text-center mb-4">
              <h2 style={{
                fontWeight: 900,
                fontSize: '40px',
                marginBottom: '30px',
                background: '-webkit-linear-gradient(#9747ff, #d45cd7, #f88ec1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Bakbak One', cursive"
              }}>Furuento</h2>

              <div className="toggle-container d-flex mb-4" style={{ 
                backgroundColor: '#e9e9e9',
                ...commonButtonStyle
              }}>
                <button
                  className={`toggle-btn flex-grow-1 ${!isSignup ? 'active' : ''}`}
                  onClick={() => setIsSignup(false)}
                >
                  Log in
                </button>
                <button
                  className={`toggle-btn flex-grow-1 ${isSignup ? 'active' : ''}`}
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="text-start mb-3">
                  <label className="form-label small" style={labelStyle}>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Rina"
                    style={inputStyle}
                  />
                </div>

                <div className="text-start mb-3">
                  <label className="form-label small" style={labelStyle}>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="learnjapanese@gmail.com"
                    style={inputStyle}
                  />
                </div>

                <div className="text-start mb-3">
                  <label className="form-label small" style={labelStyle}>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value={'*'.repeat(formData.password.length)}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const lastChar = inputValue[inputValue.length - 1];

                      if (inputValue.length < formData.password.length) {
                        setFormData({
                          ...formData,
                          password: formData.password.slice(0, inputValue.length)
                        });
                      } else if (lastChar) {
                        setFormData({
                          ...formData,
                          password: formData.password + lastChar
                        });
                      }
                    }}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholder="******"
                    style={{
                      ...inputStyle,
                      fontWeight: 'bold',
                      fontSize: '21px',
                      padding: '8px 12px',
                      height: '38px',
                      color: 'black',
                      letterSpacing: '2px',
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  />
                </div>

                {isSignup && (
                  <div className="text-start mb-4" style={requirementContainerStyle}>
                    <div className="d-flex align-items-center mb-1">
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: passwordRequirements.minLength ? '#ff00cc' : '#ff00cc',
                          marginRight: '10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '12px',
                          color: 'white',
                        }}
                      >
                        ✓
                      </div>
                      <small
                        className={
                          passwordRequirements.minLength ? 'text-success' : 'text-secondary'
                        }
                      >
                        Minimum 6 characters
                      </small>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: passwordRequirements.hasUppercase ? '#ff00cc' : '#ff00cc',
                          marginRight: '10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '12px',
                          color: 'white',
                        }}
                      >
                        ✓
                      </div>
                      <small
                        className={
                          passwordRequirements.hasUppercase ? 'text-success' : 'text-secondary'
                        }
                      >
                        An uppercase character
                      </small>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: passwordRequirements.hasSpecial ? '#ff00cc' : '#ff00cc',
                          marginRight: '10px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '12px',
                          color: 'white',
                        }}
                      >
                        ✓
                      </div>
                      <small
                        className={
                          passwordRequirements.hasSpecial ? 'text-success' : 'text-secondary'
                        }
                      >
                        A special character
                      </small>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn text-white mb-3"
                  style={{
                    backgroundColor: '#9747FF',
                    borderRadius: '6px',
                    padding: '10px',
                    ...commonButtonStyle
                  }}
                >
                  {isSignup ? "Sign up" : "Log in"}
                </button>

                <div className="text-center mb-3">
                  <small className="text-secondary" style={{ position: 'relative' }}>
                    <span style={{ 
                      backgroundColor: '#fff8dc', 
                      padding: '0 10px',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      or
                    </span>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      backgroundColor: '#e0e0e0',
                      zIndex: 0
                    }}></div>
                  </small>
                </div>

                <div className="text-center">
                  <small className="text-secondary">
                    {isSignup ? "Already have account? " : "Don't have an account? "}
                    <a
                      href="#"
                      style={{ color: '#6600ff', textDecoration: 'none' }}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSignup(!isSignup);
                      }}
                    >
                      {isSignup ? "Log in" : "Sign up"}
                    </a>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SignUpPage;