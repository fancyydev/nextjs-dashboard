import SideNav from '@/app/ui/dashboard/sidenav';
// De manera automatica se aplican los estilos que esten aqui a todas las paginas hijas
// Uno de los beneficios de usar layouts en next.js es que en la navegacion, solo los componentes
// de la pagina son actualizados mientras que el layout no se vuelve a renderizar
// permitiendonos preservar el state de react en el layout cuando cambiemos entre paginas

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}