// import { createBrowserRouter } from 'react-router-dom'
// import RoleRoute from './RoleRoute'
// import ProtectedRoute from './ProtectedRoute'
// import MainLayout from '../layouts/MainLayout'
// import Home from '../pages/public/Home'
// import About from '../pages/public/About'
// import Contact from '../pages/public/Contact'
// import SignUp from '../pages/public/SignUp'
// import SignIn from '../pages/public/SignIn'
// import SignOut from '../pages/public/SignOut'
// import AdminLayout from '../layouts/AdminLayout'
// import AdminDashboard from '../pages/admin/AdminDashboard'
// import NotFound from '../pages/public/Not-Found'

// export const Router = createBrowserRouter([
  
//   {
//     path:"/",
//     element:<MainLayout/>,
//     children:[
//       {index:true, element:<Home/>},
//       {path:"about",element:<About/>},
//       {path:"contact",element:<Contact/>},
//       {path:"sign-in",element:<SignIn/>},
//       {path:"sign-out",element:<SignOut/>},
//       {path:"sign-up",element:<SignUp/>},
//     ],
//   },
//   // {
//   //   path:"/student",
//   //   element:
//   //     <ProtectedRoute>
//   //       <RoleRoute role="student">
//   //         <StudentLayout/>
//   //       </RoleRoute>
//   //     </ProtectedRoute>,
//   //   children:[
//   //     {index:true,element:<StudentDashboard/>},
//   //     {path:"job-details",element:<JobDetails/>},
//   //     {path:"github-analysis",element:<GithubAnalysis/>},
//   //     {path:"profile",element:<Profile/>},
//   //     {path:"applications",element:<Applications/>},
//   //     {path:"jobs",element:<Jobs/>},
//   //     {path:"roadmap",element:<Roadmap/>},
//   //     {path:"skill-report",element:<SkillReport/>},
//   //     {path:"setting",element:<Settings/>},
//   //   ]
//   // },
//   // {
//   //   path:"/recruiter",
//   //   element:
//   //   <ProtectedRoute>
//   //     <RoleRoute role="recruiter">
//   //       <RecruiterLayout/>
//   //     </RoleRoute>
//   //   </ProtectedRoute>,
//   //   children:[
//   //     {index:true, element:<RecrutierDashboard/>},
//   //     {path:"candidates",element:<Candidates/>},
//   //     {path:"candidates-details",element:<CandidatesDetails/>},
//   //     {path:"interview",element:<Interview/>},
//   //     {path:"managejobs",element:<ManageJobs/>},
//   //     {path:"postjobs",element:<PostJob/>},
//   //   ]
//   // },
//   {
//     path:"/admin",
//     element:
//     <ProtectedRoute>
//       <RoleRoute role="admin">
//         <AdminLayout/>
//       </RoleRoute>
//     </ProtectedRoute>,
//     children:[
//       {index:true, element:<AdminDashboard/>},
//     ]
//   },
//   {
//     path:"*",
//     element:<NotFound/>
//   },
// ])