import SideRbar from "./SideRbar";

interface FilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
    return (
        <SideRbar isOpen={isOpen} onClose={onClose} title="Filtrar Produtos">
            <p>Aqui você pode adicionar os filtros...</p>
            {/* Adicione opções de filtro aqui */}
        </SideRbar>
    );
}
