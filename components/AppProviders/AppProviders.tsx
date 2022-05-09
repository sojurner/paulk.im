import { SettingsProvider } from '@/features/settings';
import { FavoritesProvider } from '@/features/favorites';
import { ResponsiveProvider } from '@/features/responsive';
import { DataProvider } from '@/features/data';
import { PlaylistProvider } from '@/features/playlist';

export const AppProviders: React.FC = ({ children }) => {
  return (
    <DataProvider>
      <SettingsProvider>
        <FavoritesProvider>
          <ResponsiveProvider>
            <PlaylistProvider>{children}</PlaylistProvider>
          </ResponsiveProvider>
        </FavoritesProvider>
      </SettingsProvider>
    </DataProvider>
  );
};
