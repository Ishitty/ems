
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the HRMS portal.",
        taskDate: "2026-09-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Dashboard UI",
        taskDescription: "Fix alignment and spacing issues on the employee dashboard.",
        taskDate: "2026-09-27",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Employee Profile",
        taskDescription: "Build the employee profile section with personal and work details.",
        taskDate: "2026-09-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee data API with the frontend.",
        taskDate: "2026-09-23",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Attendance Module",
        taskDescription: "Develop the employee attendance tracking interface.",
        taskDate: "2026-09-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Leave Request Form",
        taskDescription: "Create a form for employees to submit leave requests.",
        taskDate: "2026-09-27",
        category: "HRMS"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Holiday Calendar",
        taskDescription: "Add the company holiday calendar to the HRMS portal.",
        taskDate: "2026-09-24",
        category: "HRMS"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Responsive Testing",
        taskDescription: "Test the HRMS interface on different screen sizes.",
        taskDate: "2026-09-22",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Configure the initial employee database structure.",
        taskDate: "2026-09-20",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "LMS Dashboard",
        taskDescription: "Create the dashboard for the Learning Management System.",
        taskDate: "2026-09-28",
        category: "LMS"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Course Management",
        taskDescription: "Implement the course listing and filtering interface.",
        taskDate: "2026-09-26",
        category: "LMS"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Search",
        taskDescription: "Add search functionality for employee records.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Documentation",
        taskDescription: "Document the HRMS UI components and their usage.",
        taskDate: "2026-09-21",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Notification System",
        taskDescription: "Implement notifications for new HRMS activities.",
        taskDate: "2026-09-19",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Training Module",
        taskDescription: "Add employee training progress tracking.",
        taskDate: "2026-09-28",
        category: "Training"
      }
    ]
  },

  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Payroll Dashboard",
        taskDescription: "Build the payroll summary dashboard for employees.",
        taskDate: "2026-09-28",
        category: "Payroll"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Salary Slip UI",
        taskDescription: "Create the salary slip viewing interface.",
        taskDate: "2026-09-27",
        category: "Payroll"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Tax Calculator",
        taskDescription: "Create the frontend interface for tax calculations.",
        taskDate: "2026-09-25",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Expense Module",
        taskDescription: "Implement the employee expense submission page.",
        taskDate: "2026-09-23",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payroll API",
        taskDescription: "Connect payroll data with the backend API.",
        taskDate: "2026-09-20",
        category: "Backend"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Asset Management",
        taskDescription: "Create the interface for assigning company assets.",
        taskDate: "2026-09-28",
        category: "Assets"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Asset Allocation",
        taskDescription: "Implement the asset allocation workflow.",
        taskDate: "2026-09-27",
        category: "Assets"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Inventory List",
        taskDescription: "Create an inventory list for company equipment.",
        taskDate: "2026-09-25",
        category: "Inventory"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Equipment Report",
        taskDescription: "Generate a report of currently allocated equipment.",
        taskDate: "2026-09-23",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Asset Depreciation",
        taskDescription: "Implement the asset depreciation calculation interface.",
        taskDate: "2026-09-21",
        category: "Finance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Vendor Management",
        taskDescription: "Create the vendor management interface for company assets.",
        taskDate: "2026-09-28",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Asset History",
        taskDescription: "Display the complete allocation history of company assets.",
        taskDate: "2026-09-18",
        category: "Reporting"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  

  return {employees,admin}
  // console.log(employees,admin)  

}

