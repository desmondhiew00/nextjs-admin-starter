import { createContext, useContext, useRef } from "react";

import { ConfirmModal, type ConfirmModalRef, type ConfirmOptions } from "@/components/common/confirm-modal";

interface ModalContext {
  modal: React.MutableRefObject<ConfirmModalRef | null>;
}

const ModalContext = createContext<ModalContext>({
  modal: { current: null },
});

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const modal = useRef<ConfirmModalRef>(null);

  const contextValue = {
    modal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ConfirmModal ref={modal} />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) throw new Error("useModalContext must be used within a ModalContextProvider");

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
