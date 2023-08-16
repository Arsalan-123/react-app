// import React from 'react';
// import { Input, Button, Upload, message, Space } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// //import { Avatar, Space } from 'antd';

// // Your component code


// // const Images = () => {
// //   return (
// //     <div>Images</div>
// //   )
// // }

// // export default Images

// const Images = () => {
//     const handleImageUpload = (info) => {
//       if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     };
  
//     return (
//       <div>
//               <Upload
//           name="image"
//            action="/upload"
//           onChange={handleImageUpload}
//           showUploadList={false}
//         >
//           <Button icon={<UploadOutlined />}>Upload Image</Button>
//         </Upload>
  

        
//         <Input.TextArea
//           placeholder="Write your post..."
//           rows={4}
//           style={{ marginTop: '10px' }}
//         />
  
//         <Button type="primary" style={{ marginTop: '10px' }}>
//           Post
//         </Button>
//       </div>
//     );
//   };
  
//   export default Images;
  