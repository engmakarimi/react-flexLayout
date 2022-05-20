var Layout_Model = {
  global: {},
  borders: [
   { type: "border",
    location: "right",
   
    children: [
      {
        type: "tab", 
       
        name: "sidebar",
        component: 'sidebar'
      },
      {
        type: "tab", 
       
        name: "sidebar2",
        component: 'sidebar'
      }
    ]
 }
  ],
  layout: {
    type: "row",
  
    children: [
      {
        type: "tabset",
       
        children: [
          {
            type: "tab",
            name: "tab1",
            component: "TabOne",
          },
        ],
      },
      {
        type: "tabset",
        children: [
          {
            type: "tab",
            name: "tab2",
          
            component: "TabTwo",
          },
        ],
      },
      {

      type: "row",
    children: [
      {
        type: "tabset",
        children: [
          {
            type: "tab",
            name: "tab1",
           
            component: "TabOne",
          },
        ],
      },
      {
        type: "tabset",
        children: [
          {
            type: "tab",
            name: "tab2",
            component: "TabTwo",
          },
        ],
      },
    ],
  },
    ],
  },
  
};

export default Layout_Model;
