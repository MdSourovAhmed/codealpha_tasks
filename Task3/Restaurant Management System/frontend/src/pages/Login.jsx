// import AuthForm from '../components/AuthForm';

// const Login = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <AuthForm type="login" />
//     </div>
//   );
// };

// export default Login;



import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    // console.log(data);
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (err) {
      throw new Error('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* <p>Data is {data}</p> */}
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <AuthForm onSubmit={handleSubmit} isLogin={true} />
    </div>
  );
}

export default Login;