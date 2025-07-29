const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  return (
    <div>
      <p>{query}</p>
    </div>
  );
};

export default SearchPage;
