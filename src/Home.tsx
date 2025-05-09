import RecentWork from "./components/RecentWork";

const Home = () => {
  return (
    <main>
      {/* Hero section / header di sini */}
      <section className="py-16 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <p className="text-gray-600">We create cool stuff.</p>
      </section>

      {/* Recent Work section tampil di homepage */}
      <RecentWork />
    </main>
  );
};

export default Home;
