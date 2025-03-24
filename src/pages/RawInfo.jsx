export default function RawInfo() {
    const programs = [
        {
            title: "ერთიანი ეროვნული გამოცდები მათემატიკაში",
            description: "მათემატიკის გამოცდისთვის მოსამზადებელი კურსი, რომელიც მოიცავს თეორიას, პრაქტიკულ დავალებებს და გამოცდის სტრუქტურას."
        },
        {
            title: "ერთიანი ეროვნული გამოცდები ისტორიაში",
            description: "ისტორიის გამოცდის მოსამზადებელი კურსი, რომელიც განიხილავს მთავარ თემებსა და ტესტის სტრუქტურას."
        },
        {
            title: "ერთიანი ეროვნული გამოცდები ინგლისურში",
            description: "ინგლისური ენის ეროვნული გამოცდისთვის მოსამზადებელი კურსი, რომელიც მოიცავს გრამატიკას, ლექსიკას და პრაქტიკულ სავარჯიშოებს."
        }
    ];

    return (
        <div className="flex flex-col mb-10 items-center justify-center p-6">
            <div className="w-full bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-dark-color mb-6">გამოცდების პროგრამები</h1>
                <p className="text-main-color mb-4">ჩვენი გამოცდის მოსამზადებელი პროგრამები დაგეხმარებათ წარმატების მიღწევაში.</p>
                <div className="space-y-6">
                    {programs.map((program, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                            <h2 className="text-xl font-semibold text-dark-color">{program.title}</h2>
                            <p className="text-main-color mt-1">{program.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-gray-500 mt-6 italic">მალე დაემატება უამრავი სხვა საგამოცდო პროგრამა...</p>
            </div>
        </div>
    );
}
