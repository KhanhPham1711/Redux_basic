


function A() {
  const a =[1,2 , "khanh"]
  const b = [
    {
      id:1,
      name:"khanh"
    },
    {
      id:1,
      name:"khanh"
    },
    {
      id:2,
      name:"khanh"
    },
    {
      id:3,
      name:"khanh"
    },
    {
      id:4,
      name:"Quyen"
    },
  ]

  console.log(a);
  console.log(b);
  

  const c = b.filter((item) => a.includes(item.name) )

  console.log(c);
  return(
    
    <div className="container">
    <div className="flex-container">
      <h1>Your Heading</h1>
    </div>
    <div className="flex-container">
     
    </div>
  </div>
  )
}

export default A;
