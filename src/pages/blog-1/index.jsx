import React from 'react'
import HeroContainer from '../../components/HeroContainer'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Blog1Full, Blog1Image1 } from '../../assets'

const BlogOne = () => {
    return (
        <div>
            <Header />
            <HeroContainer title={'Blog'} detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'} />
            <div className='px-5 sm:px-20 my-10'>
                <div>
                    <img src={Blog1Full} alt="" />
                </div>
                <p className='text-xs mt-10'>
                    Imagine your business is a stall in the market, a lot of vendors like you are also vying for the same attention of the passing customers. Your stall is there, filled with amazing products, but no one seems to notice you. Frustrating, isn't it?
                </p>
                <h1 className='text-2xl font-semibold mt-10'>The Power of SEO</h1>
                <p className='mt-5 text-xs'>To really compete in business, you need a strong SEO strategy to stand out where attention is hard to get. With so many businesses competing for the same customers, search engine optimization (SEO) is a key way to increase your online visibility. Think of SEO as what gets your website on Google's first page. - As a beacon, something that makes people turn their heads and say, "That's exactly what I've been looking for!”, when people search for products or services like yours.</p>
                <div className='my-10'>
                    <img src={Blog1Image1} alt="" className='rounded-lg' />
                </div>

                <h2 className='text-xs'>That's why you need a solid SEO strategy to boost your visibility, attract more visitors, and help your business grow.In this blog post, we'll cover <b>8 important Local SEO strategies</b> to help your business get noticed online and drive more traffic to your website.
                </h2>
                <div className='mt-6'>
                    <ol className='list-decimal flex justify-between flex-wrap gap-5 pl-5'>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Understand Your Customers and Market</h2>
                            <p className='text-xs mt-2'>
                                It's important to really understand your customers and look at what your competitors are doing.
                                <br /><br /> 
                                Knowing what your audience wants and creating high-quality content with fast loading times can greatly improve your visibility on search engines. This not only attracts the right people but also helps your brand stand out against competitors.
                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Share Useful Industry Information</h2>
                            <p className='text-xs mt-2'>
                                Share helpful information about your industry with your clients. 
                                <br /><br />
                                Big companies, like banks, often do this with articles on their websites. This strategy works well for small businesses too.
                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Talk to Your Target Audience</h2>
                            <p className='text-xs mt-2'>
                                With AI, anyone can quickly become a pseudo-expert, leading to a lot of recycled content. 
                                <br /><br />
                                The best approach is to talk directly with your customers to understand what they really care about, what are their pain points.

                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Focus on Solving Pain Points</h2>
                            <p className='text-xs mt-2'>
                                The solution can be simple. Solve a unique problem for your ideal client in a way that makes their life easier. 
                                <br /><br />
                                Make it so compelling that customers can't say no to your service or product. Then share these success stories to establish your expertise.
                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Prioritize Quality Content Creation</h2>
                            <p className='text-xs mt-2'>
                                To improve SEO and build your brand online, focus on creating quality content. Search engines like Google value relevant and valuable content. 
                                <br /><br />
                                By consistently producing high-quality content that meets your audience's needs, you enhance your website's visibility and keep visitors coming back for more.
                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Maintaining Authenticity</h2>
                            <p className='text-xs mt-2'>
                                Stay genuine and avoid shady tactics. These might give you quick visibility but can harm your website's credibility and long-term growth.
                            </p>
                        </li>
                        <li className='sm:w-[48%]'>
                            <h2 className='font-semibold'>Invest in SEO Tools</h2>
                            <p className='text-xs mt-2'>
                                Invest in tools like SEMRush and Ahrefs to boost your SEO efforts. Plan your company's future and create a content strategy that addresses your ideal clients' buying questions.
                            </p>
                        </li>
                    </ol>
                    <p className='text-xs mt-5'>Now it depends on, how much do we want to stand out against our fellow competitors in the market on a scale of 1-10?</p>
                    <p className='text-xs mt-5'>Curated and co-authored by Prince Nwagboso (Lead Strategist, NewKindred) and Dubem Eric (Content Writer, NewKindred)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogOne
