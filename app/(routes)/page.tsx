import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;
const bilboardId = process.env.BILLBOARD_ID;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });

    let billboard;

    if (bilboardId) {
        billboard = await getBillboard(bilboardId);
    } else {
        console.error('BILLBOARD_ID is not defined');
    }

    return (
        <Container>
            <div className="space-y-10 pb-10">
                {billboard && <Billboard data={billboard} />}

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;