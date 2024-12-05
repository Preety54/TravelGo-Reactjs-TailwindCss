import React from 'react';
import BlogsCard from "./BlogsCard.jsx";
import Img1 from "../../assets/Images/varanasiboattour.webp";
import Img3 from "../../assets/Images/Taj.jpg";
import Img5 from "../../assets/Images/DesertSafari.avif";

const BlogsData =[
    {

        id: 1,
        image: Img1,
        title: "The 10 Best Places to Visit in India",
        description : "A boat tour in Varanasi is a profound journey through the spiritual and cultural essence of India’s oldest living city. Known as the “City of Light,” Varanasi is nestled along the sacred Ganges River and is home to over 80 ghats, each with its own unique story and significance.The experience often begins at Dashashwamedh Ghat, the most vibrant of all, where priests perform the mesmerizing Ganga Aarti every evening. The ceremony, with its synchrony of chants, bells, and flames, reflects the devotion of millions who revere the Ganges as a goddess. As you drift past the ghats, you’ll encounter Manikarnika Ghat, the eternal cremation ground, symbolizing the cycle of life and death. The continuous flames here are a stark reminder of the transient nature of life.Further down is the serene Assi Ghat, where pilgrims and locals gather for morning prayers, yoga sessions, and the captivating sight of the sun rising over the river, painting the sky in hues of orange and gold. The Raja Harishchandra Ghat is another cremation site, known for its deep ties to the mythological king known for his truth and sacrifice.A boat ride also offers glimpses of the city’s architectural splendor, including centuries-old temples and palaces along the riverbanks. The Chet Singh Ghat, with its fortress-like structure, and the artistically intricate Scindia Ghat, partly submerged, showcase the historical richness of Varanasi.During the journey, you can observe locals bathing in the river, washing clothes, or performing pujas, painting a vivid picture of life by the Ganges. The calm waters reflect the city’s spirituality, and the chants from the ghats fill the air with tranquility. A boat tour in Varanasi is not just sightseeing; it’s an immersion into history, culture, and devotion.",
        author:"John Doe",
        date: "April,2022",
    },

    {

        id: 2,
        image: Img3,
        title: "The 10 Best Places to Visit in India",
        description : "The Taj Mahal, a symbol of eternal love, stands majestically on the banks of the Yamuna River in Agra, India. Built in the 17th century by Mughal Emperor Shah Jahan, this architectural masterpiece is a testament to his undying love for his wife, Mumtaz Mahal. The love story of Shah Jahan and Mumtaz Mahal is one of passion, devotion, and tragedy. Mumtaz, the emperor’s favorite wife, was his trusted companion and confidante. She tragically passed away in 1631 while giving birth to their 14th child. Grief-stricken, Shah Jahan vowed to honor her memory with a monument like no other.Construction of the Taj Mahal began in 1632 and took 22 years to complete, with over 20,000 artisans working tirelessly under the guidance of master architects from India, Persia, and the Ottoman Empire. The monument's pristine white marble, sourced from Rajasthan, and its intricate inlay work of semi-precious stones create a sense of timeless beauty and elegance. The symmetry of its design, the grandeur of the central dome, and the surrounding gardens reflect the Mughal architectural ethos of paradise on earth.The Taj Mahal is more than just a mausoleum; it’s a poetic expression of love. The central tomb holds the remains of Mumtaz Mahal, while Shah Jahan’s tomb was added later, symbolizing their eternal bond. Legends say that Shah Jahan planned to build a black marble replica across the river but was imprisoned by his son, Aurangzeb, before realizing this dream.Today, the Taj Mahal is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. It continues to inspire millions with its story of love and loss, standing as a timeless ode to the power of love that transcends life and deat",
        author:"John Doe",
        date: "April,2022",
    },

    {

        id: 3,
        image: Img5,
        title: "The 10 Best Places to Visit in India",
        description : "A desert safari is a thrilling adventure that takes you deep into the mesmerizing sand dunes, offering a glimpse into the mystical allure of deserts and the traditions of their inhabitants. Historically, deserts have been home to nomadic tribes who thrived in harsh conditions, creating a unique culture that celebrates resilience, community, and harmony with nature. These safaris bring that heritage to life, combining adventure with cultural experiences.In the deserts of Rajasthan, India, or the vast stretches of the Arabian Desert, camel caravans once transported goods along ancient trade routes, connecting distant civilizations. Today, desert safaris retrace these historic paths, immersing travelers in the tales of merchants and explorers who braved the unforgiving sands. Riding a camel, often called the ship of the desert, evokes the rhythm of ancient journeys, while jeep safaris offer a modern twist, racing across rolling dunes.The experience often begins with a mesmerizing dune bashing session, where skilled drivers navigate the sandy waves with exhilarating precision. As the sun sets, the golden sands glow in warm hues, creating a surreal landscape that captivates photographers and romantics alike. Evening safaris unfold under the starlit sky in traditional camps that echo the lifestyle of Bedouins or Rajput clans. Guests are treated to folk music, dance performances, and sumptuous local cuisines, such as dal bati churma or Arabic lamb dishes, cooked in open-air kitchens.The legend of the desert safari is also tied to its spiritual essence. Deserts, with their vast emptiness and silence, have long been seen as places for introspection and spiritual awakening. A desert safari, beyond its thrills, offers moments of connection with the infinite horizon, reminding visitors of the timeless bond between humanity and nature. It’s a journey that blends adventure, history, and cultural enrichment in one unforgettable experienc",
        author:"John Doe",
        date: "April,2022",
    }

]

const BlogsComp = () => {
  return (
    <div>
      <div data-aos ="fade-up" className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
        Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {BlogsData.map((item) => (
              <BlogsCard key={item.id} {... item} />
            ))
        }

        </div>
        </div>
    </div>
  )
}

export default BlogsComp
