import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RefreshCw, Camera } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

function Controls() {
  const [displayMode, setDisplayMode] = useState(true);
  const [nvalue, setNvalue] = useState([1]);
  const [mvalue, setMvalue] = useState([1]);
  const [lvalue, setLvalue] = useState([1]);

  return (
    <Card className="min-w-sm">
      <CardHeader>
        <CardTitle>Controls</CardTitle>
        <CardDescription>Description</CardDescription>
        <CardAction>Action</CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="display-mode">Display Mode</FieldLabel>
            <FieldDescription>Idk what is this for</FieldDescription>
          </FieldContent>
          <Switch
            id="display-mode"
            checked={displayMode}
            onCheckedChange={setDisplayMode}
          />
        </Field>
        <div className="space-y-4">
          <div className="flex justify-between">
            <label htmlFor="nvalue">N value</label>
            <span>{nvalue.join("")}</span>
          </div>
          <Slider
            id="nvalue"
            value={nvalue}
            onValueChange={setNvalue}
            max={7}
            step={1}
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <label htmlFor="lvalue">L value</label>
            <span>{lvalue.join("")}</span>
          </div>
          <Slider
            id="lvalue"
            value={lvalue}
            onValueChange={setLvalue}
            max={7}
            step={1}
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <label htmlFor="mvalue">M value</label>
            <span>{mvalue.join("")}</span>
          </div>
          <Slider
            id="mvalue"
            value={mvalue}
            onValueChange={setMvalue}
            min={-1}
            max={1}
            step={1}
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          Reset Camera
          <Camera data-icon="inline-end" />
        </Button>
        <Button>
          Update
          <RefreshCw data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Controls;
