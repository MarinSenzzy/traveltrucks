'use client';
import { EngineMap, FormMap, TransmissionMap } from '@/lib/capmers';
import { useAvailableFilters } from '@/lib/hooks/useAvailableFilters';
import css from './FilterSidebar.module.css';
import { useRouter } from 'next/router';
interface FilterSidebarProps {
  initialFilters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  };
}
const FilterSidebar = ({ initialFilters }: FilterSidebarProps) => {
  const router = useRouter();

  const handleAction = (formData: FormData) => {
    const params = new URLSearchParams();

    ['location', 'form', 'engine', 'transmission'].forEach(field => {
      const val = formData.get(field) as string;
      if (val?.trim()) params.set(field, val.trim());
    });

    router.push(`/catalog?${params.toString()}`);
  };

  const { data, isLoading, isError } = useAvailableFilters();
  return (
    <>
      <aside className={css.sidebar}>
        <form action={handleAction}>
          <input type="text" name="location" defaultValue={initialFilters.location} />
          {data?.forms.map(key => (
            <label key={key}>
              <input
                type="radio"
                name="form"
                value={key}
                defaultChecked={initialFilters.form === key}
              />
              <span>{FormMap[key]}</span>
            </label>
          ))}
          <button type="submit">Search</button>
          <button type="button" onClick={() => router.push('/catalog')}>
            Clear
          </button>
        </form>
      </aside>
    </>
  );
};
export default FilterSidebar;
