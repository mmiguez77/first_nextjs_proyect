import Layout from '../../../components/Layout'
import Link from 'next/link';
import Image from 'next/image';


const firstPost = () => {
    return (
        <Layout 
        title="First Post"
        description="First Post"
        >
            <h1>First Post</h1>

            <Image
                src="/img/1.jpg"
                width={400}
                height={400}
                alt="Ocean"
            ></Image>

            <br />
            <br />
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </Layout >
    );
};

export default firstPost;