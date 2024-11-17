import { createContext, useContext, useRef } from "react";

import { ConfirmModal, type ConfirmModalRef, type ConfirmOptions } from "@/components/common/confirm-modal";

interface ConfirmModalContext {
  modal: React.MutableRefObject<ConfirmModalRef | null>;
}

const ConfirmModalContext = createContext<ConfirmModalContext>({
  modal: { current: null },
});

export const ConfirmConfirmModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const modal = useRef<ConfirmModalRef>(null);

  const contextValue = {
    modal,
  };

  return (
    <ConfirmModalContext.Provider value={contextValue}>
      {children}
      <ConfirmModal ref={modal} />
    </ConfirmModalContext.Provider>
  );
};

export const useConfirmModal = () => {
  const context = useContext(ConfirmModalContext);
  if (context === undefined)
    throw new Error("useConfirmModal must be used within a ConfirmConfirmModalContextProvider");

  return {
    modal: context.modal.current,
    confirm: (options: ConfirmOptions) => {
      context.modal.current?.confirm(options);
    },
    confirmDelete: (
      options: ConfirmOptions & {
        presetDesc?: {
          label: string;
          value: string;
        };
      },
    ) => {
      context.modal.current?.confirm({
        title: "Confirm Delete",
        description: options.presetDesc ? (
          <span>
            Are you sure you want to delete {options.presetDesc.label || ""}{" "}
            <b className="text-foreground">{options.presetDesc.value}</b>?
          </span>
        ) : (
          "Are you sure you want to delete this item?"
        ),
        confirmVariant: "destructive",
        confirmText: "Delete",
        ...options,
      });
    },
  };
};
