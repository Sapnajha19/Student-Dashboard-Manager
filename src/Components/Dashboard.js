import React from 'react'
import Papa from 'papaparse';
import 'react-toastify/dist/ReactToastify.css';
import Icon from "../Assets/Icon.png";
export default function Dashboard() {



  function handleFileSelect(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const jsonData = JSON.stringify(results.data);
        localStorage.setItem('StudentData', jsonData);
        // Display success message
        alert('Import successful!');
      },
      error: (error) => {
        console.error(error);
        alert('Import failed!');
      }
    });
  }

  function handleImport() {
    // Implement import functionality
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click();
  }

  function handleExport() {
    // Implement export functionality
    const jsonData = localStorage.getItem('StudentData');
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_data.json';
    a.click();
    // Display success message
    alert('Export successful!');



  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-auto h-auto">
        <div className="w-auto flex flex-row justify-between">
          <h1 className="w-[123px] h-[42px] text-[28px] text-[#121212] font-Inter font-semibold pr-3">Students</h1>
          <div className="flex flex-row gap-[10px]">
            <button className="w-[164px] h-[44px] pt-2.5 pr-5 pb-2.5 pl-5 rounded-md border border-black text-base font-medium font-Inter" onClick={handleImport}>Import Student</button>
            <button className="w-[176px] h-[44px] flex items-center pt-2.5 pr-5 pb-2.5 pl-5 rounded-md border border-black bg-[#121212] gap-2" onClick={handleExport}>
              <img src={Icon} alt="" />
              <p className="text-base font-medium font-Inter text-[#FFFFFF]">Export as CSV</p>
            </button>
          </div>
        </div>
        <p className="w-[290px] h-[24px] font-Inter text-base text-[#7D8398] font-normal pr-5 pb-10">List of all the students in the database</p>
        <table className=" border-collapse border-[#EEEAF9] rounded-lg rounded-t-lg-[#EEEAF9] rounded-b-lg overflow-hidden">
          <thead classNAme="rounded-tl-xl rounded-tr-xl mr-40">
            <tr className="bg-[#F4F0FF] text-black font-Inter text-sm font-semibold  h-[41px] rounded-t-xl mr-40">
              <th className="w-[144.6px] rounded-tl-md border-t-[#EEEAF9] pr-20">Name</th>
              <th className="w-[144.6px] pr-20">Roll No</th>
              <th className="w-[144.6px] pr-20">Address</th>
              <th className="w-[144.6px] pr-20">Institute</th>
              <th className="w-[144.6px] rounded-tr-md pr-20 border-l border-[#EEEAF9]">Course</th>
            </tr>
          </thead>
          <tbody className="rounded-t-lg rounded-b-lg">
            <tr className="border-b border-[#EEEAF9] h-[92px] text-sm">
              <td className="pr-20 border-l border-[#EEEAF9]">Aarav</td>
              <td className="pr-20">1962001</td>
              <td className=""><div className="w-[144.6px] flex flex-col"><div className="text-left">10/1, Main Street,</div><div className="text-left">Gandhi Nagar,</div><div className="text-left">Bangalore - 560008,</div><div className="text-left">Karnataka</div></div></td>
              <td className=""><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">LMN Institute of</div><div className="text-left">Technology</div></div></td>
              <td className="border-r border-[#EEEAF9]"><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">Bachelors of</div><div className="text-left">Technology</div></div></td>
            </tr>
            <tr className="border-b border-[#EEEAF9]  h-[109px] text-sm">
              <td className="pr-20 border-l border-[#EEEAF9]">Dhruv</td>
              <td className="pr-20">1473502</td>
              <td className=""><div className="w-[144.6px] flex flex-col"><div className="text-left">Door No. 12-2-417/A,</div><div className="text-left">Bank Colony Road,</div><div className="text-left">Ruknuddin Bagh,</div><div className="text-left">Hyderabad - 500032,</div><div className="text-left">Telangana</div></div></td>
              <td className=""><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">DEF Management</div><div className="text-left">Institute</div></div></td>
              <td className="border-r border-[#EEEAF9] "><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">Masters of Business</div><div className="text-left">Administration</div></div></td>
            </tr>
            <tr className="border-b border-[#EEEAF9] h-[109px] text-sm">
              <td className="pr-20 border-l border-[#EEEAF9]">Sahil</td>
              <td className="pr-20">1762503</td>
              <td className=""><div className="w-[144.6px] flex flex-col"><div className="text-left">H.No. 8-2-123/456,</div><div className="text-left">Sri Nagar Colony,</div><div className="text-left">Road No. 1, Banjara</div><div className="text-left">Hills, Hyderabad -</div><div className="text-left">500034, Telangana</div></div></td>
              <td className=""><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">MNO Medical College</div></div></td>
              <td className="border-r border-[#EEEAF9]"><div className="w-[144.6px] flex flex-col ml-5"><div className="text-left">Bachelor of Unani</div><div className="text-left">Medicine and</div><div className="text-left">Surgery</div></div></td>
            </tr>
            <tr className="h-[51px] text-sm rounded-md">
              <td className="rounded-bl-md border-b border-[#EEEAF9] border-l border-[#EEEAF9] rounded-bl-lg"></td>
              <td className="rounded-br-md border-b border-[#EEEAF9]"></td>
              <td className="rounded-br-md border-b border-[#EEEAF9]"></td>
              <td className="rounded-br-md border-b border-[#EEEAF9]"></td>
              <td className="border-b border-[#EEEAF9] border-r border-[#EEEAF9]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
