import img1 from '../../assets/carrier/img1.png'
import img2 from '../../assets/carrier/img2.png'
import img3 from '../../assets/carrier/img3.png'
const SupportSection = () => {
    return (
        <div className="flex flex-col items-center my-3 justify-center bg-[#F9FAFB] p-8 rounded-xl max-w-3xl mx-auto">
            <div className="flex -space-x-4 mb-4">
                <img
                    className="w-12 h-12 rounded-full"
                    src={img1}
                    alt="User 1"
                />
                <img
                    className="w-12 h-12 rounded-full"
                    src={img2}
                    alt="User 2"
                />
                <img
                    className="w-12 h-12 rounded-full"
                    src={img3}
                    alt="User 3"
                />
            </div>

            <h3 className="text-lg font-semibold text-[#101828]">Still have questions?</h3>
            <p className="text-[#667085s] text-center max-w-md">
                Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
            </p>
        </div>
    );
};

export default SupportSection;
