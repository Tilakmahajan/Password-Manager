import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArry, setpasswordArry] = useState([])
    useEffect(() => {
        let password = localStorage.getItem("password");
        let passwordArry;
        if (password) {
            setpasswordArry(JSON.parse(password))
        }

    }, [])

   
    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const copytext = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)

    }


    const showpassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("icons/closed.png")) {
            ref.current.src = "icons/eye.png"

            passwordref.current.type = "password"
        }
        else {

            ref.current.src = "icons/closed.png"
            passwordref.current.type = "text"
        }
    }


    const savePassword = (params) => {
        if(form.site.length>0 && form.username.length>0 && form.password.length>0){

            setpasswordArry([...passwordArry, {...form,id: uuidv4()}])
            localStorage.setItem("password", JSON.stringify([...passwordArry, {...form,id: uuidv4()}]))
            console.log(([...passwordArry, form]))
            setform({ site: "", username: "", password: "" })
        }
        else{
            toast("Enter Valid crediantial")
        }

    }
    const deletpassword = (id) => {
      console.log("deliting password"+ id)
      let c = confirm("Do you want to delete this ?")
      if (c){
          setpasswordArry(passwordArry.filter(item=>item.id!==id))
          localStorage.setItem("password", JSON.stringify(passwordArry.filter(item=>item.id!==id)))
        }
    }
    const editpassword=(id)=>{
        console.log("Editing password"+id)
        let e = confirm("Do  you want to edit this ?")
        if(e){

            setform(passwordArry.filter(i=>i.id===id)[0])
            setpasswordArry(passwordArry.filter(item=>item.id!==id))
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                </div>

                <div className=" mx-auto  md:mycontainer min-h-[78vh]: ">
                    <h1 className='font-bold text-4xl text-center'>
                        <span className='text-green-500 '>&lt;</span>
                        Pass
                        <span className='text-green-500'>OP&gt;</span>
                    </h1>
                    <p className='text-lg text-center'>Own Passworld Manager</p>
                    <div className=' flex flex-col p-4 text-black gap-6 items-center'>
                        <input value={form.site} onChange={handlechange} placeholder='Enter URL' className='rounded-full border border-green-600 px-4 py-1 w-full' type="text" name="site" id="" />
                        <div className="flex flex-col md:flex-row w-full justify-between gap-8 ">
                            <input value={form.username} onChange={handlechange} placeholder='Enter Username'
                                name='username' className='rounded-full border border-green-600 px-3 py-1 w-full' type="text" />
                            <div className="relative">
                                <input ref={passwordref} value={form.password} onChange={handlechange} placeholder='Enter password'
                                    name='password' className='rounded-full border border-green-600 px-3 py-1 w-full' type="password" />
                                <span className='absolute right-0 top-0  cursor-pointer' onClick={showpassword}>
                                    <img ref={ref} className='invert p-2' width={40} src="icons/eye.png" alt="eye" />
                                </span>
                            </div>
                        </div>
                        <button onClick={savePassword} className='flex bg-green-700   w-fit justify-center items-center text-white border border-white rounded-full px-2 py-2 hover:bg-green-500'><lord-icon
                             src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            colors="primary:#000000"
                        >
                        </lord-icon>Save Password</button>
                    </div>
                    <div className="yourpassword">
                        <h2 className='font-bold text-2xl py-4'> Your passwords </h2>
                        {passwordArry.length === 0 && <div>No password to show</div>}
                        {passwordArry.length != 0 &&
                            <table className="table-auto w-full  overflow-hidden rounded-md">
                                <thead className='bg-green-500'>
                                    <tr>
                                        <th className='py-2'>Site</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {passwordArry.map((item) => {
                                        return <tr>
                                            <td className='flex items-center justify-center  py-2 border border-white text-center   '> <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className="lordcopy cursor-pointer " onClick={() => { copytext(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "20px ", "height": "20px", "paddingTop": "3px" }}

                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        colors="primary:#000000"
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </td>

                                            <td className='py-2 border border-white text-center w-min-32  '> {item.username}
                                                <span className="lordcopy cursor-pointer " onClick={() => { copytext(item.username) }}>
                                                    <lord-icon
                                                        style={{ "width": "20px ", "height": "20px", "paddingTop": "3px" }}

                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        colors="primary:#000000"
                                                    >
                                                    </lord-icon>
                                                </span>
                                            </td>
                                            <td className='py-2 border border-white text-center w-min-32  '> 
                                                <span>{"*".repeat(item.password.length)}</span>
                                                <span className=" lordcopy cursor-pointer " onClick={() => { copytext(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "20px ", "height": "20px", "paddingTop": "3px" }}

                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                        colors="primary:#000000"
                                                    >
                                                    </lord-icon>
                                                </span>
                                            </td>
                                            <td className='py-2 border border-white text-center w-min-32  '>
                                                
                                                 <span className='cursor-pointer mx-1' onClick={()=>{editpassword(item.id)}}><lord-icon
                                                  src="https://cdn.lordicon.com/qnpnzlkk.json"
                                                    trigger="hover"
                                                    colors="primary:#000000"
                                                    style={{ "width": "25px ", "height": "25px", "paddingTop": "3px" }}
                                               >
                                                </lord-icon></span>
                                                <span className='cursor-pointer mx-1' onClick={()=>{deletpassword(item.id)}}><lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    colors="primary:#000000"
                                                    style={{ "width": "20px ", "height": "20px", "paddingTop": "3px" }}
                                               >
                                                </lord-icon></span>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>

                        }

                    </div>
                </div>
            </div></>
    )
}

export default manager
