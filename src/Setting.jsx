import React, { useState, useEffect } from 'react';
import {getById, getUserIdByToken, updateAdmin} from '../services/adminServices';

const Setting=()=> {
    // State for name and email
  const [username, setName]= useState('');
  const [email, setEmail]= useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);



  const getAdmin = async () => {
    try {

      //Get token from localStorage 
      const authToken = localStorage.getItem('authToken');
      console.log('Token:', authToken);
      if(!authToken) throw new Error("Token not found in localStorage.");

      // call API to get userId

      const userIdResponse = await getUserIdByToken(authToken);
      if(!userIdResponse || !userIdResponse.userId){
        throw new Error ('Failed to retrive user ID.');
      }
      const userId = userIdResponse.userId;


      // use userId to fetch userdata

      const userData = await getById(userId);
      if(userData){
        setName(userData.username || '');
        setEmail(userData.email || '');
      } else{
        throw new Error('Failed to fetch user data.');
      }
    } catch(err){
      console.error('Error fetching admin data:',err);
      setError(err.message || 'An unexpected error occured.');

    }finally{
      setLoading(false);
    }
  };


  useEffect(() => {
    
    getAdmin();
    
  }, []);

  const handelSaveChanges = async () => {

    setFormError('');

    if (!username.trim() || !email.trim()) {
      setFormError('Username and email cannot be empty.');
      return;
  }


    if (newPassword !== confirmNewPassword) {
      setFormError('New passwords do not match');
      return;
    }
    if (newPassword.length > 0 && newPassword.length < 6) {
      setFormError('Password must be at least 6 characters long');
      return;
    }

    setSaving(true);
    // console.log('===========');


    try {
      const payload = {
        username,
        email,
        currentPassword,
        newPassword: newPassword || null,
      };
        // Get userId from localStorage or the fetched data
    const authToken = localStorage.getItem('authToken');
    const userIdResponse = await getUserIdByToken(authToken);
    const adminId = userIdResponse.userId;


      // Call the backend service to save data
      const response = await updateAdmin(adminId, payload);
      if (response && response.success) {
        alert('Changes saved successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        throw new Error(response.message || 'Failed to save changes');
      }
    } catch (err) {
      console.error('Error saving changes:', err);
      setFormError(err.message || 'An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };


//   // function to fetch admin data by ID

// //   const getAdmin = async(adminId)=>{
// //     try{
// //       const payload ={   
// //         username,
// //         email,
// //         currentPassword,
// //         newPassword,
// //     }
// //     const response= await updateAdmin(adminId,payload);
// //     console.log("API Response",response);

// //     if(response){
// //       setName(response.username || '');
// //       setEmail(response.email || '');
// //     } else{
// //       setError('No data returned from the API');
// //     }
// //   } catch(err){
// //     console.log('Error Fetching admin data;', err);
// //     setError('Failed to load profile data.');

// //   } finally{
// //     setLoading(false);
// //   }
// // };

// //   useEffect(()=>{

// //     getAdmin();
// //   },[]);

// //   // useEffect(()=>{
// //   //   const fetchData = async () => {
// //   //     try{
// //   //       const data = await getById(PaymentResponse.adminId);
// //   //       console.log("API Response:", data); 
// //   //       if(data && data.username && data.email){
// //   //       setName(data.username);
// //   //       setEmail(data.email);
// //   //       }else{
// //   //         setError('No data returned from the API.');

// //   //       }
// //   //     }catch(error){
// //   //       console.error('Error fetching data:', error);
// //   //       setError('Failed to load profile data');

// //   //     }finally {
// //   //       setLoading(false);
// //   //     }

// //   //   };
// //   //   fetchData();
// //   // },[]);

// //   const handleClickShowPassword = () => {
// //     setValues({
// //         ...values,
// //         showPassword: !values.showPassword,
// //     });
// // };
// //   const handelSaveChanges= async() =>{
// //     setFormError("");

// //     //Validate password fields
// //     if (newPassword!==confirmNewPassword){
// //       setFormError('New password  do not match');
// //       return;
// //     }
// //     if (newPassword.length > 0 && newPassword.length < 6) {
// //       setFormError('Password must be at least 6 characters long');
// //       return;
// //     }

// //     setSaving(true);

// //     try{
// //       const payload ={
// //         username,
// //         email,
// //         currentPassword,
// //         newPassword: newPassword || null,
// //       };

// //       // call the backend service to save data
// //       const response = await getById(props.adminId, payload);
// //       if (response && response.success){
// //         alert('Changes saved successfully!');
// //         setCurrentPassword('');
// //         setNewPassword('');
// //         setConfirmNewPassword('');

// //       } else{
// //         throw new Error(response.message || 'Failed to save changes');
// //       }
// //     } catch(err){
// //       console.error('error saving changes:',err);
// //       setFormError(err.message || 'An unexpected error occured');

// //     } finally{
// //       setSaving(false);
//     }

   
//   };
  if (loading) return <div className='text-2xl font-bold'>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className='p-6 space-y-6 h-screen'>
      <h2 className='text-2xl font-bold p-6 bg-white text-gray-700'>Settings</h2>
      <div  className='p-10 bg-white rounded shadow space-y-4'>
        <h3 className='font-bold text-lg'>Profile settings</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className=' w-screen-2 border border-gray-300' >Username</label>
            <input
            type='text'
            value={username}
            onChange={(e)=>setName(e.target.value)}
            placeholder='name'

            className='w-full p-2 border-gray-300 rounded'
            
            ></input>
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Email</label>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='email'
            className='w-full p-2 border-gray-300 rounded'
            
            />
          </div>

        </div>

      </div>
       {/* Security Settings Section */}
       <div className='p-5 bg-white rounded shadow space-y-4'>
        <h3 className='text-lg font-bold'>Security Settings</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Current Password</label>
            <input
            type='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder='********'
          
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>New Password</label>
            <input
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='Enter new password'
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          <div>
            <label className=' w-screen-2 border border-gray-300'>Confirm New Password</label>
            <input
            type='password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder='confirm new password'
            className='w-full p-2 border border-gray-300 rounded'/>
          </div>
          {formError && <div className="text-red-500 col-span-2">{formError}</div>}
          <button 
          onClick={handelSaveChanges}
          className='mt-6 h-10 text-white bg-blue-600 rounded hover:bg-blue-700' disabled={saving}
          aria-label="Save Changes"> 
          Save Changes</button>

        </div>
       </div>
       <div className='p-4  bg-white rounded shadow flex justify-between items-center'> 
        <h3 className='text-lg font-bold '>Two-Factor Authentication</h3>
        <button className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'>Enable</button>
        </div>

      
    </div>
  )
}


export default Setting;