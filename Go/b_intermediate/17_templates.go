// Topic: Text and HTML Templating (text/template)
package main

import (
    "os"
    "text/template"
)

type InventoryData struct {
    Warehouse string
    Items     []string
}

func main() {
    tplText := `Warehouse: {{.Warehouse}}
Items in inventory:
{{- range .Items}}
  - {{.}}
{{- end}}
`
    tmpl, err := template.New("inv").Parse(tplText)
    if err != nil {
        panic(err)
    }

    data := InventoryData{
        Warehouse: "Berlin-Central",
        Items:     []string{"Laptops", "Docking Stations", "Keyboards"},
    }

    tmpl.Execute(os.Stdout, data)
}
