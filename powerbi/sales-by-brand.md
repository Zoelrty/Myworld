# Sales by Brand: Power BI report (category: Sales)

## 1. Data source (ERPNext / MariaDB)
Run as a user with System Manager role, or connect Power BI via the MySQL connector:

```sql
SELECT COALESCE(NULLIF(sii.brand,''),'(No Brand)') AS brand,
       si.posting_date, si.customer, sii.item_code,
       sii.qty, sii.base_net_amount AS net_sales
FROM `tabSales Invoice` si
JOIN `tabSales Invoice Item` sii ON sii.parent = si.name
WHERE si.docstatus = 1;
```

Power BI Desktop: Get Data > MySQL database (or Text/CSV for an export), then Transform Data.

## 2. Model
- Add a Date table: `Date = CALENDARAUTO()`, relate `Date[Date]` to `posting_date`.

## 3. Measures
```DAX
Net Sales = SUM(Sales[net_sales])
Qty = SUM(Sales[qty])
Sales PY = CALCULATE([Net Sales], SAMEPERIODLASTYEAR('Date'[Date]))
YoY % = DIVIDE([Net Sales] - [Sales PY], [Sales PY])
Brand Share % = DIVIDE([Net Sales], CALCULATE([Net Sales], ALL(Sales[brand])))
```

## 4. Visuals
- Cards: Net Sales, Qty, YoY %
- Clustered bar: brand x Net Sales (Top N 10)
- Line: month x Net Sales, legend = brand
- Matrix: brand rows, month columns, Net Sales values
- Slicers: Year, Customer

## 5. Publish to the Sales category
Home > Publish > choose the Sales workspace. In the Power BI Service, open the workspace > Settings, or the report's endorsement/label settings, and set the Sales category or label. Workspace and category names depend on your tenant.
