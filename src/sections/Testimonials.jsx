import { testimonials , collegeExp} from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import CollegeCard from "../components/CollegeCard";


const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="About Me "
          sub="what's my journey been like so far? 🚀"
        />

        {/* <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div> */}
        <div className="lg:columns-2 md:columns-2 columns-1 mt-16" >
          {collegeExp.map((exp, index) => (
            <CollegeCard card={exp} key={index} index={index} >
              🎓
            </CollegeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
