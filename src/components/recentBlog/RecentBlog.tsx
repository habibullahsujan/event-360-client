

const RecentBlog = () => {
    return (
        <>
            <section className=" bg-[#0F172A] text-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <h1 className="my-6 block text-4xl font-bold    ">
                                    Our Blogs
                                </h1>

                                <p className="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="What Makes a Successful Event Planner? "
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="A 2022 Pulse Check – Predictions for This Year in Events"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Y23YC07/image-02.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="How to Elevate Your Event and Design with Intention"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecentBlog;

type TBlogCard={
    image:string;
    date:string;
    CardTitle:string;
    CardDescription:string;
}
const BlogCard = ({ image, date, CardTitle, CardDescription }:TBlogCard) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 w-full">
                    <div className="mb-8 overflow-hidden rounded">
                        <img src={image} alt="" className="w-full" />
                    </div>
                    <div>
                        {date && (
                            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                {date}
                            </span>
                        )}
                        <h3>
                            <a
                                href="/#"
                                className="mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="text-base text-body-color dark:text-dark-6">
                            {CardDescription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
