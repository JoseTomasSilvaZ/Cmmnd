import React from "react";
import { useEffect, useState } from "react";
import "../tailwind.css";
import { AnimatePresence, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

const styleVariants = cva(
  "px-3 py-2 absolute text-xs right-10 bottom-10  w-fit h-fit  flex gap-2 rounded-md border  font-semibold",
  {
    variants: {
      variant: {
        default: "text-zinc-300 border-zinc-800/50 bg-zinc-900 ",
        light: "bg-zinc-100 border-zinc-200 text-zinc-900",
      },
      side: {
        bottomLeft: "absolute bottom-4 left-4",
        bottomRight: "absolute bottom-4 right-4",
        topRight: "absolute  top-4 right-4 ",
        topLeft: "absolute  top-4 left-4  ",
        bottom: "absolute left-1/2 transform -translate-x-1/2 ",
      },
    },
    defaultVariants: {
      variant: "default",
      side: "bottom",
    },
  }
);

const pressedKeyVariants = cva(
  "p-2 border h-8 min-w-8 flex justify-center  items-center text-center rounded-md",
  {
    variants: {
      variant: {
        default: " bg-zinc-800/3 border-zinc-800/70 ",
        light: "bg-zinc-100 border-zinc-300 text-zinc-800 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
type AnimationVariants = {
  hidden: { opacity: number; y: number };
  visible: { opacity: number; y: number };
};

interface PressedKeyProps {
  pressedKey: string;
  variants: AnimationVariants;
  variant?: "default" | "light" | null;
}

interface Props extends VariantProps<typeof styleVariants> {
  commandTriggerKeys?: Array<string>;
}

function PressedKey({ pressedKey, variants, variant }: PressedKeyProps) {
  return (
    <motion.div
      initial={variants.hidden}
      animate={variants.visible}
      className={pressedKeyVariants({ variant })}
    >
      {pressedKey}
    </motion.div>
  );
}

function formatKey(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
}

function resetCommand(
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>,
  setKeysPressed: React.Dispatch<React.SetStateAction<string[]>>
) {
  setShowComponent(false);
  setKeysPressed([]);
}

export default function Command(props: Props) {
  const [keysPressed, setKeysPressed] = useState<Array<string>>([]);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleKeyPress = (event: KeyboardEvent) => {
      const key = formatKey(event.key);
      const triggers = props.commandTriggerKeys || [];
      setKeysPressed((prevKeys) => {
        if (
          !triggers.includes(key) &&
          prevKeys.length === 0 &&
          triggers.length > 0
        )
          return prevKeys;
        setShowComponent(true);
        clearTimeout(timer);
        timer = setTimeout(() => {
          resetCommand(setShowComponent, setKeysPressed);
        }, 2000);
        const keyAlreadyChained = prevKeys.includes(key);

        if (triggers.length > 0 && triggers.includes(key)) {
          if (!keyAlreadyChained) {
            return [...prevKeys, key];
          } else {
            return [key];
          }
        } else {
          return keyAlreadyChained ? prevKeys : [...prevKeys, key];
        }
      });
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(timer);
    };
  }, [props.commandTriggerKeys]);

  const variants: AnimationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {showComponent && (
        <motion.div
          variants={variants}
          transition={{ ease: "easeIn" }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={styleVariants({
            variant: props.variant,
            side: props.side,
          })}
        >
          {keysPressed.map((key, index) => (
            <PressedKey
              key={index}
              pressedKey={key}
              variant={props.variant}
              variants={variants}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
