import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navlink from './Navbar/Navbar';

function Products() {
  const productData = [
    {
      product: 'Phone',
      category: 'Samsung Galaxy A34 5G',
      price: '40,000',
      description: 'A high-end smartphone with advanced features. The Phone model includes a powerful camera, long-lasting battery, and a sleek design. Stay connected in style.',
      imageUrl: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1713365310~exp=1713368910~hmac=d1307223b1c2eb9cb189e35cae679b4b797266e8d05c0d654ebb902bcf6521fc&w=360'
    },
    {
      product: 'Earphones',
      category: 'Boat',
      price: 3999,
      description: 'Wireless earphones with great sound quality. These Earphones provide a comfortable fit and deliver crystal-clear audio for an immersive listening experience.',
      imageUrl: 'https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074247.jpg?t=st=1713365239~exp=1713368839~hmac=66e8faa6e04bda7e656f5ef784a9fa3cd13acf86ee59482139af4b76c515fac1&w=360'
    },
    {
      product: 'Laptop',
      category: 'ASUS',
      price: '1,29,999',
      description: 'Powerful laptop for productivity and gaming. The Laptop comes with high-performance specifications, a large display, and a stylish design, making it perfect for work.',
      imageUrl: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg?t=st=1713365397~exp=1713368997~hmac=aa55823cf7b1c411f1c700b07b3826f0921cacda85fc60470d51cead466fc761&w=740'
    },
    {
      product: 'Smartwatch',
      category: 'Noise',
      price: '2,999',
      description: 'Fitness tracker with smartwatch features. The Smartwatch helps you stay active and organized. It includes fitness tracking, notifications, and a sleek design suitable for any occasion.',
      imageUrl: 'https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?t=st=1713365435~exp=1713369035~hmac=1168780a784eab798a3b376c6f10031fb0e7b68d8a4a88a4fc97dfdee79b4fff&w=740'
    },
    {
      product: 'Camera',
      category: 'Samsung',
      price: '49,999',
      description: 'Professional DSLR camera with high-resolution sensor. Capture stunning images with the Camera advanced features. Ideal for photographers who demand exceptional image quality.',
      imageUrl: 'https://img.freepik.com/free-photo/camera-photographic-equipment-lens-technology-generative-ai_188544-19482.jpg?t=st=1713365473~exp=1713369073~hmac=82e2b6da48d1380b45edf3b53857c607191c13ef27efaf32bff253d476abac52&w=740'
    },
    {
      product: 'Tablet',
      category: 'Red mi',
      price: '22,999',
      description: 'Portable tablet with a vibrant display. The Tablet offers a compact design, powerful performance, and a vibrant display for an enjoyable multimedia good experience on the go.',
      imageUrl: 'https://img.freepik.com/free-photo/electronic-device-surrounded-by-nature_52683-107556.jpg?t=st=1713365513~exp=1713369113~hmac=2fbe34a0cef66528542698bba13188da6d5c6ba643ab5e78f921100931b369e1&w=740'
    },
    {
      product: 'Wireless Speaker',
      category: 'Sony',
      price: '9,999',
      description: 'Bluetooth speaker for immersive audio experience. The Wireless Speaker delivers high-quality sound wirelessly. Perfect for parties, gatherings, or enjoying music at home.',
      imageUrl: 'https://img.freepik.com/free-psd/speaker-mockup-cylinder-shape_1310-945.jpg?t=st=1713365552~exp=1713369152~hmac=b36f71e15081fee49a3ddf3db8c9ef30e801a7312eba2ce88b65a9a7db3cb77e&w=740'
    },
    {
      product: 'Fitness Tracker',
      category: 'Wearables',
      price: 499,
      description: 'Track your daily activities with this fitness tracker. The Fitness Tracker monitors your steps, heart rate, and sleep patterns. Stay fit and motivated with this wearable device.',
      imageUrl: 'https://img.freepik.com/free-vector/realistic-fitness-tracker-illustration_23-2148521366.jpg?t=st=1713367946~exp=1713371546~hmac=ec9a9c16156fbb2ed7376adbb2956d5136b57c6fa8ed66c43c2cde72f999bd89&w=740'
    },
    {
      product: 'Gaming Console',
      category: 'Gaming',
      price: '59,999',
      description: 'Latest gaming console with high-performance. The Gaming Console offers cutting-edge graphics, game library, and an immersive gaming experience for enthusiasts.',
      imageUrl: 'https://i.postimg.cc/SKSTbQ82/Sony-Play-Station-4-Pro-Gaming-Console.png'
    },
  ];
  const navigate=useNavigate()
  const handleTicket = () => {
   navigate('/create')
  }
  
  return (
    
    <div className='container-f bg-light'>
      <Navlink />
      <div>
        <h1 className='text-center mb-4 mt-4'>All Products</h1>
      </div>
      <div className='row'>
        {productData.map((product, index) => (
          <div key={index} className='col-md-4 mb-4'>
            <div className='card'>
              <h3 className='card-title text-center fs-2 mt-2 text-danger'>{product.product}</h3>
              <img
                src={product.imageUrl}
                alt={product.product}
                className='img-product img-fluid mx-auto mt-3'
                style={{ maxWidth: '100%', height: '190px' }}
              />

              <div className='card-body '>
                <p className='card-text'>Brand: {product.category}</p>
                <p className='card-text'>Price :<span className='text-success'> Rs. {product.price}</span></p>
                <p>Details :</p>
                <p className='card-text des'>{product.description}</p>
                <div className='d-flex '>
                  <button onClick={handleTicket} className='btn btn-info mx-auto'>Enquire</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default Products;