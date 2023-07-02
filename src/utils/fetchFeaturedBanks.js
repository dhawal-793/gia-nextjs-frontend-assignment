import featuredBanks from '@/data/featuredBanks';

export const getFeaturedBanks = async () => {
    try {
        //     const response = await fetch('https://raw.githubusercontent.com/dhawal-793/gia-assignment-dummy-data/main/featuredBanks.json');
        //     if (!response.ok) {
        //         console.error(response);
        //         throw new Error('Failed to fetch dummy data');
        //     }
        //     console.log(response);
        //     const data = await response.json();
        //     console.log(data);
        //     return data;


        await new Promise(resolve => setTimeout(resolve, 1000));
        return featuredBanks
    } catch (error) {
        console.error(error);
        // Handle the error appropriately in your code
    }
}

